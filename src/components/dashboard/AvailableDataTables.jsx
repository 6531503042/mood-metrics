import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Database, Calendar } from 'lucide-react';

const AvailableDataTables = ({ data }) => {
  return (
    <Table aria-label="Available Data Tables" className="text-sm">
      <TableHeader>
        <TableColumn>Table</TableColumn>
        <TableColumn>Last Updated</TableColumn>
      </TableHeader>
      <TableBody>
        {data.map((table) => (
          <TableRow key={table.id}>
            <TableCell>
              <div className="flex items-center">
                <Database size={16} className="mr-2" />
                <div>
                  <p className="font-semibold">{table.name}</p>
                  <p className="text-xs text-gray-500">{table.description}</p>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                {table.lastUpdated}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AvailableDataTables;