// src/components/Quotes.js
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Container,Table, TableBody, TableCell, TableContainer, TableRow, Paper, TableHead, Typography } from '@mui/material';
import { fetchData } from '../api';
import Pagination from '@mui/material/Pagination';

function Characters() {
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  const { data, status } = useQuery(['quote', page, limit], () =>
    fetchData('quote', page, limit)
  );


  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'error') return <div>Error fetching data</div>;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };


  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Characters
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Dialog</strong></TableCell>
              <TableCell><strong>Movie</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.docs?.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.dialog}</TableCell>
                <TableCell>{item.movie} </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {data?.docs?.length > 0 &&
        <div style={{marginTop: '20px', display: 'flex', justifyContent: 'center'}}>
            <Pagination
                count={data.pages}
                page={page}
                onChange={handleChangePage}
                variant="outlined"
                shape="rounded"
            />
        </div>
    }
    </Container>
  );
}

export default Characters;

