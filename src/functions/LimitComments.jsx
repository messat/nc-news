import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function LimitComments({limit, setLimit}) {

  const handleChange = (event) => {
    setLimit(event.target.value);
  };

  const fontSizeLimit = {fontSize: "17px"}

  return (
    <div style={{marginTop: "-17px"}}>
      <FormControl variant="standard" sx={{ minWidth: 120 }} size='large'>
        <InputLabel id="Limit-Comment-label">Limit</InputLabel>
        
        <Select
          labelId="Limit-Comment-label"
          id="Limit-Comments-Select"
          value={limit}
          onChange={handleChange}
          label="LimitComment"
        >

          <MenuItem value={5}>
            <em>Default</em>
          </MenuItem>
          <MenuItem value={6} sx={{fontSizeLimit}}>6</MenuItem>
          <MenuItem value={7} sx={{fontSizeLimit}}>7</MenuItem>
          <MenuItem value={8} sx={{fontSizeLimit}}>8</MenuItem>
          <MenuItem value={9} sx={{fontSizeLimit}}>9</MenuItem>
          <MenuItem value={10} sx={{fontSizeLimit}}>10</MenuItem>
          <MenuItem value={11} sx={{fontSizeLimit}}>11</MenuItem>
          <MenuItem value={12} sx={{fontSizeLimit}}>12</MenuItem>

        </Select>
      </FormControl>
    </div>
  );
}