import { Skeleton, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { TableRowsLoaderProps } from "../utilities/interfaces/common";

export default function TableRowsLoader ({ rowsNum = 10 }: TableRowsLoaderProps) {
  return <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
        </TableHead>
    <TableBody>
    {[...Array(rowsNum)].map((row, index) => (
    <TableRow key={index}>
      <TableCell component="th" scope="row">
        <Skeleton animation="wave" variant="text" />
      </TableCell>
      <TableCell>
        <Skeleton animation="wave" variant="text" />
      </TableCell>
      <TableCell>
        <Skeleton animation="wave" variant="text" />
      </TableCell>
      <TableCell>
        <Skeleton animation="wave" variant="text" />
      </TableCell>
    </TableRow>
  ))}
        </TableBody>
    </Table>
}
