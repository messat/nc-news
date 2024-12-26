import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLimit({limit, setLimit}) {

  const handleChange = (event) => {
    setLimit(event.target.value);
  };
  const fontSize = {fontSize: "18px"}
  return (
    <div style={{display: "flex", justifyContent: "end"}}>
      <FormControl variant="standard" sx={{ mt: -6.2, minWidth: 120, mr: 45 }}>
        <InputLabel id="limit-label">Limit</InputLabel>
        <Select
          labelId="limit-label"
          id="limit-standard"
          value={limit}
          onChange={handleChange}
          label="Limit"
        >
          <MenuItem value={9} sx={fontSize}>
            <em>Default</em>
          </MenuItem>
          <MenuItem value={10} sx={fontSize}>10</MenuItem>
          <MenuItem value={11} sx={fontSize}>11</MenuItem>
          <MenuItem value={12} sx={fontSize}>12</MenuItem>
          <MenuItem value={13} sx={fontSize}>13</MenuItem>
          <MenuItem value={14} sx={fontSize}>14</MenuItem>
          <MenuItem value={15} sx={fontSize}>15</MenuItem>
          <MenuItem value={16} sx={fontSize}>16</MenuItem>
          <MenuItem value={17} sx={fontSize}>17</MenuItem>
          <MenuItem value={18} sx={fontSize}>18</MenuItem>
          <MenuItem value={19} sx={fontSize}>19</MenuItem>
          <MenuItem value={20} sx={fontSize}>20</MenuItem>

        </Select>
      </FormControl>
    </div>
  );
}