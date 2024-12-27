import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function ErrorAlert() {
  return (
    <Stack sx={{ width: '100%', mb: 5, fontWeight: 500}} style={{marginTop: "10px"}} >
      <Alert severity="error">Log in to your account to add a comment.</Alert>
    </Stack>
  );
}

function SuccessAlert(){
    return (
        <Stack sx={{ width: '100%' }} style={{ marginTop: "10px"}}>
          <Alert severity="success">Confirmed! Your comment has been successfully posted.</Alert>
        </Stack>
      );
}

export {ErrorAlert, SuccessAlert}


