#!/usr/bin/env node

const fs = require('fs-extra');
const { PDFDocument, rgb, degrees } = require('pdf-lib');
const fontkit = require('@pdf-lib/fontkit');
const path = require('path');

// 读取 names.txt 文件中的所有姓名
const readNames = () => {
    const namesPath = path.resolve('./names.txt');
    const names = fs.readFileSync(namesPath, 'utf-8').split('\n').map(name => name.trim()).filter(name => name);
    return names;
};

// 读取 pdfs 目录中的所有 PDF 文件
const readPdfFiles = () => {
    const pdfDir = path.resolve('./pdfs');
    return fs.readdirSync(pdfDir).filter(file => file.endsWith('.pdf')).map(file => path.join(pdfDir, file));
};

// 为 PDF 添加水印
const addWatermarkToPdf = async (pdfPath, watermarkText, outputPath) => {
    try {
        const existingPdfBytes = await fs.readFile(pdfPath);
        const pdfDoc = await PDFDocument.load(existingPdfBytes);
        pdfDoc.registerFontkit(fontkit);
        const fontBytes = await fs.readFile(path.join(__dirname, 'fonts/SimSun.ttf'));
        const customFont = await pdfDoc.embedFont(fontBytes);
        const pages = pdfDoc.getPages();
        const fontSize = 80;
        const opacity = 0.05;

        pages.forEach(page => {
            const { width, height } = page.getSize();
            const x = width / 2 - (fontSize * watermarkText.length * 0.3);
            const y = height / 2 - (fontSize / 2);
            page.drawText(watermarkText, {
                x: x,
                y: y,
                size: fontSize,
                font: customFont,
                color: rgb(0, 0, 0),
                rotate: degrees(45),
                opacity: opacity,
            });
        });

        const pdfBytes = await pdfDoc.save();
        await fs.writeFile(outputPath, pdfBytes);
        console.log(`Watermark added to ${outputPath}`);
    } catch (error) {
        console.error('Error adding watermark:', error);
    }
};

// 处理所有 PDF 和姓名
const processPdfsAndNames = async () => {
    const names = readNames();
    const pdfFiles = readPdfFiles();
    for (const name of names) {
        const outputDirForName = path.resolve('.', 'output', name);
        await fs.ensureDir(outputDirForName);
        for (const pdfFile of pdfFiles) {
            const outputFilePath = path.join(outputDirForName, `${path.basename(pdfFile, '.pdf')}_${name}.pdf`);
            await addWatermarkToPdf(pdfFile, name, outputFilePath);
            console.log(`Generated ${outputFilePath}`);
        }
    }
};

processPdfsAndNames().catch(err => {
    console.error('Error processing PDFs:', err);
});
