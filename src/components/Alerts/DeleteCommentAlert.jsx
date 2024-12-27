import Box from '@mui/joy/Box';
import Alert from '@mui/joy/Alert';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import IconButton from '@mui/joy/IconButton';
import { useState } from "react"


export default function CommentDeleteAlert() {
  const [isVisible, setIsVisible] = useState(true)
  return (
    
    <Box sx={{ display: 'flex', gap: 2, width: '100%', flexDirection: 'column', marginBottom: "23px" }}>
      {isVisible &&  <Alert variant="soft" color='success'
      endDecorator={
        <IconButton variant="plain" size="small" color="neutral">
          <CloseRoundedIcon onClick={() => setIsVisible(false)}/>
        </IconButton>
      }
      >Your Comment has been successfully deleted</Alert>
    }
    </Box>
  );
}
