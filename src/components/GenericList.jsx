import { Link } from '@tanstack/router';
import useAxios from '../api/useAxios';
import {getUrl} from '../api'
import { Pagination, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import TableRowsLoader from './TableRowsLoader'; 
import { useState } from 'react';
import { limit } from '../utilities/utils';

export default function GenericList () {
  const [page, setPage] = useState(1)
  const baseUrl = window.location.pathname
  const [url, setUrl] = useState(baseUrl)
  const [rawData, isLoading, error] = useAxios(url)
  const data = rawData?.results

  if (isLoading) return <TableRowsLoader />
  
  if(error) return <div>{error}</div>

  const count=Math.floor(rawData?.count/10)

  const handleChange = (_evt, value) => {

    setUrl(`${baseUrl}/?page=${value}`)
    setPage(value)
  }

  return <>
  <TableContainer
 component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          {Object.keys(data[0]).map(el =>
            typeof data[0][el] === "string"
            && <TableCell key={el} align="right">{el.replaceAll('_', ' ')}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {(Object.keys(row)).map((el, index) =>
            typeof row[el] === "string"
                  && (index === 0 ?
                  <TableCell key={el} align="right"><Link to={getUrl(row.url)} >{limit(row[el], 50)}</Link></TableCell>
                  : <TableCell key={el} align="right">{limit(row[el], 50)}</TableCell>)
                  )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <span className='p-6'/>
    <Stack alignItems="center">
      <Pagination page={page} count={count} onChange={handleChange} />
    </Stack>
  </>
}