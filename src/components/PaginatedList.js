// src/components/PaginatedList.js
import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';

function Pagination({ data}) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
//   const [offset] = useState(5);
  const [limit] = useState(8)

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const fetchData = async (page) => {
    try {
      const response = await apiFunction(page, limit);
      setData(response);
    } catch (error) {
      console.error(error);
      // Handle the error, e.g., show an error message to the user
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div style={{marginTop: '20px', display: 'flex', justifyContent: 'center'}}>
            <Pagination
                count={data.pages}
                page={page}
                onChange={handleChangePage}
                variant="outlined"
                shape="rounded"
            />
        </div>
  );
}

export default Pagination;
