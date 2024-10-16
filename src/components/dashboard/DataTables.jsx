import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

const DataTables = ({ data }) => {
  return (
    <Table aria-label="Available Data Tables">
      <TableHeader>
        <TableColumn>Table Name</TableColumn>
        <TableColumn>Description</TableColumn>
        <TableColumn>Last Updated</TableColumn>
      </TableHeader>
      <TableBody>
        {data.map((table) => (
          <TableRow key={table.id}>
            <TableCell>{table.name}</TableCell>
            <TableCell>{table.description}</TableCell>
            <TableCell>{table.lastUpdated}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTables;