import React from 'react';
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { Download, FileSpreadsheet, FilePdf, FileText } from 'lucide-react';
import { saveAs } from 'file-saver';
import { utils, write } from 'xlsx';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const ExportButton = ({ data, filename = 'feedback-report' }) => {
  const exportToCSV = () => {
    const ws = utils.json_to_sheet(data);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Feedback");
    const csvData = write(wb, { bookType: 'csv', type: 'array' });
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, `${filename}.csv`);
  };

  const exportToExcel = () => {
    const ws = utils.json_to_sheet(data);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Feedback");
    const excelData = write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelData], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, `${filename}.xlsx`);
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [Object.keys(data[0])],
      body: data.map(Object.values),
    });
    doc.save(`${filename}.pdf`);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          color="primary"
          endContent={<Download size={16} />}
          className="ml-2"
        >
          Export
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Export options">
        <DropdownItem 
          key="csv" 
          onClick={exportToCSV}
          startContent={<FileText size={16} />} // Icon for CSV
        >
          Export as CSV
        </DropdownItem>
        <DropdownItem 
          key="excel" 
          onClick={exportToExcel}
          startContent={<FileSpreadsheet size={16} />} // Icon for Excel
        >
          Export as Excel
        </DropdownItem>
        <DropdownItem 
          key="pdf" 
          onClick={exportToPDF}
          startContent={<FilePdf size={16} />} // Icon for PDF
        >
          Export as PDF
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ExportButton;
