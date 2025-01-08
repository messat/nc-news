import Pagination from '@mui/material/Pagination';

export default function TopicsPagination({page, setPage}) {
    const handleChange = (event, value) => {
        setPage(value)
    }
  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginBottom: "20px"}}>
      <Pagination 
      count={10} 
      color="primary" 
      size='large'
      onChange={handleChange}/>
    </div>
  );
}