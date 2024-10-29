import React from 'react';
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { Download, FileSpreadsheet, FileType, FileText } from 'lucide-react';
import { exportToCSV, exportToExcel, exportToPDF } from '../lib/ExportButton';

const ExportButton = ({ data, filename = 'feedback-report' }) => {
  const handleExport = (type) => {
    if (!data || data.length === 0) {
      console.error('No data to export');
      return;
    }

    switch (type) {
      case 'csv':
        exportToCSV(data, filename);
        break;
      case 'excel':
        exportToExcel(data, filename);
        break;
      case 'pdf':
        exportToPDF(data, filename);
        break;
      default:
        console.error('Invalid export type');
    }
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
          onPress={() => handleExport('csv')}
          startContent={<FileText size={16} />}
        >
          Export as CSV
        </DropdownItem>
        <DropdownItem 
          key="excel" 
          onPress={() => handleExport('excel')}
          startContent={<FileSpreadsheet size={16} />}
        >
          Export as Excel
        </DropdownItem>
        <DropdownItem 
          key="pdf" 
          onPress={() => handleExport('pdf')}
          startContent={<FileType size={16} />}
        >
          Export as PDF
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ExportButton;