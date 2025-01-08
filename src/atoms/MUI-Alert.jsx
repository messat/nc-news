import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function ErrorAlert({open, setOpen}) {
  return (
    <Stack sx={{ width: '100%', mb: 4, fontWeight: 500}} >
      <Collapse in={open}>
      <Alert 
      severity="error"
      action={
        <IconButton
          aria-label="close"
          size="small"
          onClick={() => {
            setOpen(false)
          }}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      }
      >Log in to your account to add a comment.</Alert>
      </Collapse>
    </Stack>
  );
}

function SuccessAlert({open, setOpen}){
    return (
        <Stack sx={{ width: '100%' }}>
          <Collapse in={open}>
          <Alert severity="success"
           action={
            <IconButton
              aria-label="close"
              size="small"
              onClick={() => {
                setOpen(false)
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{marginBottom: "45px"}}>Confirmed! Your comment has been successfully posted.</Alert>
          </Collapse>
        </Stack>
      );
}

function AlertVote({open, setOpen}){
  return (
    <Box sx={{ width: '100%' }}>
    <Collapse in={open}>
      <Alert severity="error"
        action={
          <IconButton
            aria-label="close"
            size="small"
            onClick={() => {
              setOpen(false)
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        Please login to vote for this article
      </Alert>
    </Collapse>
   
  </Box>
  );
}

function LoggedInAlert({open, setOpen, setLogInAlert}){
  const {loggedIn} = useContext(UserContext)
  return (
    <Box sx={{ width: '100%', display: "flex", justifyContent: "center" }}>
    <Collapse in={open}>
      <Alert severity="success"
        action={
          <IconButton
            aria-label="close"
            size="small"
            onClick={() => {
              setOpen(false)
              setLogInAlert(false)
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2, fontSize: "17px", mt: -3 }}
      >
        Welcome {`${loggedIn.name}`}! You are successfully logged in.
      </Alert>
    </Collapse>
   
  </Box>
  );
}

function LogOutAlert({open, setOpen}){
  return (
    <Box sx={{ width: '100%', display: "flex", justifyContent: "center", mt: 2, mb: -3 }}>
    <Collapse in={open}>
      <Alert severity="success"
        action={
          <IconButton
            aria-label="close"
            size="small"
            onClick={() => {
              setOpen(false)
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2, fontSize: "18px"}}
      >
        You are successfully logged out!
      </Alert>
    </Collapse>
   
  </Box>
  );
}

function VoteLogOutAlert({open, setOpen}){
  return (
    <Box sx={{ width: '100%', mt: -8, mb: 6 }}>
    <Collapse in={open}>
      <Alert severity="error"
        action={
          <IconButton
            aria-label="close"
            size="small"
            onClick={() => {
              setOpen(false)
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ fontSize: "17px" }}
      >
        Please login to vote for this comment
      </Alert>
    </Collapse>
   
  </Box>
  );
}


export {ErrorAlert, SuccessAlert, AlertVote, LoggedInAlert, LogOutAlert, VoteLogOutAlert}


