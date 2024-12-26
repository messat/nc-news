import * as React from 'react';
import Pagination from '@mui/material/Pagination';

export default function PaginateComments({page, setPage, paginateNumberComments}) {

    const handleChange = (event, value) => {
        setPage(value)
    }

  return (
      <Pagination count={paginateNumberComments} color="primary" page={page} onChange={handleChange} size='medium'/>
  );
}
