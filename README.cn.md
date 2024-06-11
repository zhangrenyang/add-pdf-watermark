# PDF 水印工具使用指南

## 简介
本指南将引导您使用 PDF 水印工具。此工具允许您使用文本文件中的姓名向指定目录中的所有 PDF 文件添加水印。

## 前提条件
在开始之前，请确保您具备以下条件：
- 电脑上已安装 Node.js。
- 准备好必要的目录结构和文件。

## 安装

1. **安装 Node.js**：如果您尚未安装 Node.js，请从 [nodejs.org](https://nodejs.org/) 下载并安装。

2. **安装 PDF 水印工具**：打开终端并运行以下命令全局安装工具：

    ```sh
    npm install -g add-pdf-watermark
    ```

## 目录结构
确保您的目录结构如下：

```
.
├── fonts
│   └── SimSun.ttf
├── pdfs
│   ├── document1.pdf
│   ├── document2.pdf
│   └── ...
├── names.txt
```

- `fonts/SimSun.ttf`：包含 SimSun 字体文件。
- `pdfs/`：包含您想要添加水印的 PDF 文件的目录。
- `names.txt`：包含要用作水印的姓名，每行一个。

## 使用方法

1. **准备 `names.txt` 文件**：
    - 使用文本编辑器打开 `names.txt` 文件。
    - 添加您想用作水印的姓名，每行一个。
    
    示例：
    ```
    Alice
    Bob
    Charlie
    ```

2. **添加 PDF 文件**：
    - 将所有需要添加水印的 PDF 文件放入 `pdfs/` 目录中。

3. **运行工具**：
    - 打开终端。
    - 导航到包含 `names.txt` 和 `pdfs/` 目录的文件夹。
    - 运行以下命令：

      ```sh
      watermark
      ```

## 输出
运行工具后，您会在当前目录下找到一个新的 `output/` 目录。该目录包含每个姓名的子目录，并在这些子目录中包含已添加水印的 PDF 文件。

处理后的示例结构：
```
.
├── output
│   ├── Alice
│   │   ├── document1_Alice.pdf
│   │   ├── document2_Alice.pdf
│   ├── Bob
│   │   ├── document1_Bob.pdf
│   │   ├── document2_Bob.pdf
│   ├── Charlie
│   │   ├── document1_Charlie.pdf
│   │   ├── document2_Charlie.pdf
```

## 故障排除
如果在处理过程中遇到任何错误，请确保以下几点：
- `fonts/SimSun.ttf` 文件放置正确。
- `pdfs/` 目录包含有效的 PDF 文件。
- `names.txt` 文件格式正确，每行一个姓名。

有关进一步的帮助，请参考终端中的错误消息以确定问题所在。

## 结论
通过本指南，您可以轻松使用 PDF 水印工具为 PDF 文件添加水印。如果您有任何进一步的问题或需要额外的帮助，请随时寻求支持。