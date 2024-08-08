import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function ErrorAlert() {
  return (
    <Stack sx={{ width: '100%', mb: 1, fontWeight: 500}} >
      <Alert severity="error">Log in to your account to add a comment.</Alert>
    </Stack>
  );
}

function SuccessAlert(){
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="success">Confirmed! Your comment has been successfully posted.</Alert>
        </Stack>
      );
}

export {ErrorAlert, SuccessAlert}


