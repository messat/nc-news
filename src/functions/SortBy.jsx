import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants({sortBy, setSortBy, orderBy, setOrderBy}) {

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };
  
  const handleOrderChange = (event) => {
    setOrderBy(event.target.value)
  }
  const fontSize = { fontSize: "17px" }
  
  return (
    <div style={{ display: "flex", justifyContent: "flex-end"  }} className='SortByFunc' >
      <FormControl variant="standard" sx={{ minWidth: 120, mb: -5 }} >
        <InputLabel id="demo-simple-select-standard-label" sx={fontSize}>Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={sortBy}
          onChange={handleChange}
          label="SortBy"
          sx={{ width: '120%' }}
        >
          <MenuItem value="" sx={fontSize}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={"author"} sx={fontSize}>Author</MenuItem>
          <MenuItem value={"created_at"} sx={fontSize}>Date Created</MenuItem>
          <MenuItem value={"title"} sx={fontSize}>Title</MenuItem>
          <MenuItem value={"topic"} sx={fontSize}>Topic</MenuItem>
          <MenuItem value={"votes"} sx={fontSize}>Votes</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="standard" sx={{ minWidth: 120, ml: 6, mr: 31, mb: -4 }}>
        <InputLabel id="demo-simple" sx={fontSize}>Order By</InputLabel>
        <Select
          labelId="demo-simple"
          id="demo-simple-select"
          value={orderBy}
          onChange={handleOrderChange}
          label="Order"
          sx={{ width: "120%"}}
        >
          <MenuItem value="" sx={fontSize}>
            <em>Order</em>
          </MenuItem>
          <MenuItem value={"ASC"} sx={fontSize}>Ascending</MenuItem>
          <MenuItem value={"DESC"} sx={fontSize}>Descending</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
