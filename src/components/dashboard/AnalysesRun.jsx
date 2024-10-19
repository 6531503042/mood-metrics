import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip } from "@nextui-org/react";
import { BarChart2, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const AnalysesRun = ({ data }) => {
  return (
    <Table aria-label="Analyses Run" className="text-sm">
      <TableHeader>
        <TableColumn>Analysis</TableColumn>
        <TableColumn>Status</TableColumn>
      </TableHeader>
      <TableBody>
        {data.map((analysis) => (
          <TableRow key={analysis.id}>
            <TableCell>
              <div className="flex items-center">
                <BarChart2 size={16} className="mr-2" />
                <div>
                  <p className="font-semibold">{analysis.name}</p>
                  <p className="text-xs text-gray-500 flex items-center">
                    <Clock size={12} className="mr-1" /> {analysis.dateRun}
                  </p>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Chip
                color={analysis.status === 'Completed' ? 'success' : 'warning'}
                variant="flat"
                startContent={analysis.status === 'Completed' ? <CheckCircle size={12} /> : <AlertCircle size={12} />}
              >
                {analysis.status}
              </Chip>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AnalysesRun;