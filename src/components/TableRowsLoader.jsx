import { Skeleton, Table, TableCell, TableRow } from "@mui/material";
import PropTypes from "prop-types"

export default function TableRowsLoader ({ rowsNum = 10 }) {
  return <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
    </Table>
}


TableRowsLoader.propTypes = {
  rowsNum: PropTypes.string
}
