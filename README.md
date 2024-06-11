# PDF Watermarking Tool Usage Guide

## Introduction
This guide will walk you through the process of using the PDF Watermarking Tool. This tool allows you to add watermarks to all PDF files in a specified directory, using names from a text file.

## Prerequisites
Before you begin, make sure you have the following:
- Node.js installed on your computer.
- The necessary directory structure and files prepared.

## Installation

1. **Install Node.js**: If you haven't installed Node.js yet, download and install it from [nodejs.org](https://nodejs.org/).

2. **Install the PDF Watermarking Tool**: Open your terminal and run the following command to install the tool globally:

    ```sh
    npm install -g add-pdf-watermark
    ```

## Directory Structure
Ensure your directory structure is set up as follows:

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

- `fonts/SimSun.ttf`: Contains the SimSun font file.
- `pdfs/`: Directory containing the PDF files you want to watermark.
- `names.txt`: File containing the names to be used as watermarks, each on a new line.

## Usage

1. **Prepare `names.txt`**:
    - Open `names.txt` in a text editor.
    - Add the names you want to use as watermarks, each on a new line.
    
    Example:
    ```
    Alice
    Bob
    Charlie
    ```

2. **Add PDF Files**:
    - Place all the PDF files you want to watermark in the `pdfs/` directory.

3. **Run the Tool**:
    - Open your terminal.
    - Navigate to the directory containing your `names.txt` and `pdfs/` directory.
    - Run the following command:

      ```sh
      watermark
      ```

## Output
After running the tool, you will find a new `output/` directory in your current directory. This directory will contain subdirectories for each name, and within those subdirectories, the watermarked PDF files.

Example structure after processing:
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

## Troubleshooting
If you encounter any errors during the process, ensure the following:
- The `fonts/SimSun.ttf` file is correctly placed.
- The `pdfs/` directory contains valid PDF files.
- The `names.txt` file is correctly formatted with one name per line.

For further assistance, refer to the error messages in the terminal to identify the issue.

## Conclusion
By following this guide, you can easily add watermarks to your PDF files using the PDF Watermarking Tool. If you have any further questions or need additional help, feel free to reach out for support.