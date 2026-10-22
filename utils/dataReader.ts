// Unified Data Reader with support for multiple data formats (JSON, CSV, XML, etc.)

import path from 'path';
import { readCSV } from './csvReader';
import { readExcel } from './excelReader';
import fs from 'fs';

export function readData(filePath: string, sheetName?: string) {
    const ext = path.extname(filePath).toLowerCase();
    switch (ext) {
        case ".csv":
            return readCSV(filePath);
        case ".xlsx":
            return readExcel(filePath, sheetName || 'Sheet1');
        case '.json':
            const jsonData = fs.readFileSync(filePath, 'utf-8');
            return JSON.parse(jsonData);
        default:
            throw new Error(`Unsupported file format: ${ext}`);
    }
}