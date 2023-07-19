import { Link } from '@tanstack/router';
import useAxios from '../api/useAxios';
import {getUrl} from '../api'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export default function PeopleList () {
  const [data, isLoading, error] = useAxios(window.location.pathname)

  if(isLoading) return <div>is loading...</div>
  if(error) return <div>{error}</div>

  return <>
<TableContainer
 component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Mass</TableCell>
            <TableCell align="right">Hair Color</TableCell>
            <TableCell align="right">Skin Color</TableCell>
            <TableCell align="right">Eye Color</TableCell>
            <TableCell align="right">Birth Year</TableCell>
            <TableCell align="right">Gender</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.results.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link to={getUrl(row.url)} >{row.name}</Link>
              </TableCell>
              <TableCell align="right">{row.height}</TableCell>
              <TableCell align="right">{row.mass}</TableCell>
              <TableCell align="right">{row.hair_color}</TableCell>
              <TableCell align="right">{row.skin_color}</TableCell>
              <TableCell align="right">{row.eye_color}</TableCell>
              <TableCell align="right">{row.birth_year}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
}