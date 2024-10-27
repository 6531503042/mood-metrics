import React from 'react';
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { Download, FileSpreadsheet, FilePdf, FileText } from 'lucide-react';
import { saveAs } from 'file-saver';
import { utils, write } from 'xlsx';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const ExportButton = ({ filename = 'feedback-report' }) => {
  // Mock-up data
  const mockData = [
    {
      id: 1,
      employeeName: "Alice Smith",
      feedbackDate: "2024-10-01",
      feedback: "Great team collaboration on the last project!",
      anonymity: "Anonymous",
      privacyLevel: "Management Only",
    },
    {
      id: 2,
      employeeName: "Bob Johnson",
      feedbackDate: "2024-10-02",
      feedback: "Need more resources for the upcoming project.",
      anonymity: "Public",
      privacyLevel: "Entire Company",
    },
    {
      id: 3,
      employeeName: "Charlie Brown",
      feedbackDate: "2024-10-03",
      feedback: "The new HR policies need better communication.",
      anonymity: "Anonymous",
      privacyLevel: "HR Only",
    },
    {
      id: 4,
      employeeName: "Diana Prince",
      feedbackDate: "2024-10-04",
      feedback: "Loved the team-building event last week!",
      anonymity: "Public",
      privacyLevel: "Team Only",
    },
    {
      id: 5,
      employeeName: "Edward Elric",
      feedbackDate: "2024-10-05",
      feedback: "Workload is manageable, but can be overwhelming at times.",
      anonymity: "Anonymous",
      privacyLevel: "Management Only",
    },
    {
      id: 6,
      employeeName: "Fiona Gallagher",
      feedbackDate: "2024-10-06",
      feedback: "The office environment is too noisy.",
      anonymity: "Public",
      privacyLevel: "Entire Company",
    },
    {
      id: 7,
      employeeName: "George Costanza",
      feedbackDate: "2024-10-07",
      feedback: "Need better equipment for the design team.",
      anonymity: "Anonymous",
      privacyLevel: "Team Only",
    },
    {
      id: 8,
      employeeName: "Hannah Baker",
      feedbackDate: "2024-10-08",
      feedback: "More training sessions on new tools would be helpful.",
      anonymity: "Public",
      privacyLevel: "HR Only",
    },
    {
      id: 9,
      employeeName: "Isaac Asimov",
      feedbackDate: "2024-10-09",
      feedback: "Appreciate the open-door policy with management.",
      anonymity: "Anonymous",
      privacyLevel: "Management Only",
    },
    {
      id: 10,
      employeeName: "Jack Sparrow",
      feedbackDate: "2024-10-10",
      feedback: "The cafeteria food could use some improvement.",
      anonymity: "Public",
      privacyLevel: "Entire Company",
    },
  ];

  const exportToCSV = () => {
    const ws = utils.json_to_sheet(mockData);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Feedback");
    const csvData = write(wb, { bookType: 'csv', type: 'array' });
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, `${filename}.csv`);
  };

  const exportToExcel = () => {
    const ws = utils.json_to_sheet(mockData);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Feedback");
    const excelData = write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelData], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, `${filename}.xlsx`);
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [Object.keys(mockData[0])],
      body: mockData.map(Object.values),
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
          onPress={exportToCSV}
          startContent={<FileText size={16} />}
        >
          Export as CSV
        </DropdownItem>
        <DropdownItem 
          key="excel" 
          onPress={exportToExcel}
          startContent={<FileSpreadsheet size={16} />}
        >
          Export as Excel
        </DropdownItem>
        <DropdownItem 
          key="pdf" 
          onPress={exportToPDF}
          startContent={<FilePdf size={16} />}
        >
          Export as PDF
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ExportButton;
