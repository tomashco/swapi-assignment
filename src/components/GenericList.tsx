import { Link } from '@tanstack/router';
import {getUrl, swapiListFetch} from '../api'
import { Button, Pagination, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import TableRowsLoader from './TableRowsLoader'; 
import { ChangeEvent, useEffect, useState } from 'react';
import { limit } from '../utilities/utils';
import { ApiComponent } from '../utilities/interfaces/Api';
import { useQuery } from 'react-query';
import axios from 'axios';

export default function GenericList ({apiUrl}: ApiComponent) {
  const [page, setPage] = useState(1)
  const [url, setUrl] = useState(apiUrl)
  const { isLoading, error, data: rawData } = useQuery(url, () => swapiListFetch(url));

  const data = rawData?.results

  useEffect(() => {
    setUrl(apiUrl)
  },[apiUrl])

  if (isLoading) return <TableRowsLoader />
  if(axios.isAxiosError(error)) return <div>{error.message}</div>
  if (data?.length === 0) return (<div>
    No data to display &nbsp; 
    <Button variant="contained" onClick={()=> setUrl(window.location.pathname)}>Reset search</Button></div>)
  
  const count=Math.floor((rawData?.count || 0)/10)

  const handleChange = (_evt: ChangeEvent<unknown>, value: number) => {
    setUrl(`${apiUrl}/?page=${value}`)
    setPage(value)
  }

  return <>
  <TableContainer
    component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          {data && Object.keys(data[0]).map(el =>
            typeof data[0][el as keyof typeof data[0]] === "string"
            && <TableCell key={el} align="right">{el.replaceAll('_', ' ')}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.map((row) => (
            <TableRow
              key={Object.keys(row)[0]}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {(Object.keys(row)).map((el, index) =>
                  typeof row[el as keyof typeof row] === "string"
                  && (index === 0 ?
                  <TableCell key={el} align="right"><Link search={{}} params={{}} to={getUrl(row.url)} >{limit(row[el as keyof typeof row], 50)}</Link></TableCell>
                  : <TableCell key={el} align="right">{limit(row[el as keyof typeof row], 50)}</TableCell>)
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