import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { Cell } from 'jspdf-autotable';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Injectable()
export class ExcelService {

  public dataExcel:any;
  constructor() { }

  public exportAsExcelFile(json: any[], excelFileName: string, vectorC: []): void {
    var tc = [];
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    tc.push({ wpx: 250 });
    for (var i in vectorC) {
      tc.push({ wpx: 150 });
    }
    worksheet["!cols"] = tc;

    const workbook: XLSX.WorkBook = { Sheets: { 'consolidado': worksheet }, SheetNames: ['consolidado'] };

    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  public exportAsExcelFileD(json: any[], excelFileName: string, vectorC: []): void {
    var tc = [];
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    tc.push({ wpx: 250 });

    worksheet["!cols"] = tc;

    const workbook: XLSX.WorkBook = { Sheets: { 'consolidado': worksheet }, SheetNames: ['consolidado'] };

    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  public async leerExcel(event: any) {
  return new Promise((resolve, reject) => {
    let file = event.target.files[0]
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file)

    fileReader.onload = async  (e) => {
      var workBook = XLSX.read(fileReader.result, { type: 'binary' })
      var sheetNames = workBook.SheetNames;
      this.dataExcel= XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]])
      console.log(this.dataExcel)
      resolve(this.dataExcel)
      
    }

  })
  }


}
