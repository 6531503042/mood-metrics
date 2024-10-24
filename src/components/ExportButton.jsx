import React from 'react';
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { Download } from 'lucide-react';
import { saveAs } from 'file-saver';
import { utils, write } from 'xlsx';

const ExportButton = ({ data, filename = 'feedback-report' }) => {
  const exportToCSV = () => {
    const ws = utils.json_to_sheet(data);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Feedback");
    const csvData = write(wb, { bookType: 'csv', type: 'array' });
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, `${filename}.csv`);
  };

  const exportToPDF = () => {
    // Implement PDF export logic here
    console.log('PDF export not implemented yet');
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
        <DropdownItem key="csv" onPress={exportToCSV}>
          Export as CSV
        </DropdownItem>
        <DropdownItem key="pdf" onPress={exportToPDF}>
          Export as PDF
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ExportButton;