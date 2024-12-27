import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields({comment, setComment}) {

    function handleComment(event){
        setComment(event.target.value)
     }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { ml: 9, width: '76ch',mb: 3, mt: -6},
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField 
          id="standard-textarea"
          label="Add a comment..."
          type='text'
          placeholder="Type your comment here"
          multiline
          variant="standard"
          onChange={handleComment}
          value={comment}
          required
        />
      </div>
    </Box>
  );
}
