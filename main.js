#!/usr/bin/env node
const fs = require('fs-extra');
const { PDFDocument, rgb, degrees } = require('pdf-lib');
const fontkit = require('@pdf-lib/fontkit');
const path = require('path');
const watermarkText = "张三";
const directoryPath = "./pdfs";
async function addWatermarkToPdf(filePath) {
    try {
        const existingPdfBytes = await fs.readFile(filePath);
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
        const newFilePath = path.join(path.dirname(filePath), `${path.basename(filePath, '.pdf')}_${watermarkText}.pdf`);
        await fs.writeFile(newFilePath, pdfBytes);
        console.log(`Watermark added to ${newFilePath}`);
    } catch (error) {
        console.error('Error adding watermark:', error);
    }
}
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.error('Failed to list directory:', err);
    }
    files.forEach(file => {
        if (path.extname(file).toLowerCase() === '.pdf') {
            addWatermarkToPdf(path.join(directoryPath, file));
        }
    });
});
