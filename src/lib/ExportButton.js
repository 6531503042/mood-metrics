import { saveAs } from 'file-saver';
import { utils, write } from 'xlsx';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

export const exportToExcel = (data, filename) => {
  const ws = utils.json_to_sheet(data);
  const wb = utils.book_new();
  utils.book_append_sheet(wb, ws, "Data");
  const excelBuffer = write(wb, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
  saveAs(blob, `${filename}.xlsx`);
};

export const exportToCSV = (data, filename) => {
  const ws = utils.json_to_sheet(data);
  const csv = utils.sheet_to_csv(ws);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  saveAs(blob, `${filename}.csv`);
};

export const exportToPDF = (data, filename) => {
  const doc = new jsPDF();
  
  doc.setFontSize(16);
  doc.text(filename, 14, 15);
  
  doc.setFontSize(10);
  doc.text(`Generated on: ${new Date().toLocaleString()}`, 14, 25);

  const headers = Object.keys(data[0]);
  const rows = data.map(obj => Object.values(obj));

  doc.autoTable({
    head: [headers],
    body: rows,
    startY: 30,
    styles: { fontSize: 8 },
    headStyles: { fillColor: [104, 109, 224] },
    alternateRowStyles: { fillColor: [245, 247, 250] },
  });

  doc.save(`${filename}.pdf`);
};

export default {
  exportToExcel,
  exportToCSV,
  exportToPDF
};