import Pagination from '@mui/material/Pagination';

export default function BasicPagination({page, setPage, paginatedNumber}) {
    const handleChange = (event, value) => {
      setPage(value);
    };
    
    return (
        <div style={{ display: "flex", justifyContent: "center"}}>
        <Pagination 
        count={paginatedNumber} 
        color="primary" 
        size='medium' 
        sx={{ mt: -3}}
        page={page}
        onChange={handleChange}
        />
        </div>
    );
  }