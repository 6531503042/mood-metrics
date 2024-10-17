
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip } from "@nextui-org/react";

const AnalysesRun = ({ data }) => {
  return (
    <Table aria-label="Analyses Run">
      <TableHeader>
        <TableColumn>Analysis Name</TableColumn>
        <TableColumn>Date Run</TableColumn>
        <TableColumn>Status</TableColumn>
      </TableHeader>
      <TableBody>
        {data.map((analysis) => (
          <TableRow key={analysis.id}>
            <TableCell>{analysis.name}</TableCell>
            <TableCell>{analysis.dateRun}</TableCell>
            <TableCell>
              <Chip color={analysis.status === 'Completed' ? 'success' : 'warning'}>
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