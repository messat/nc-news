import Box from '@mui/joy/Box';
import Alert from '@mui/joy/Alert';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import IconButton from '@mui/joy/IconButton';
import { useState } from "react"

export function DeleteArticleAlert(){
    const [isVisible, setIsVisible] = useState(true)
    return (
      
      <Box sx={{ display: 'flex', width: '100%', justifyContent: "center",  marginBottom: "20px", marginTop: "-20px" }}>
        {isVisible &&  <Alert variant="soft" color='success'
        endDecorator={
          <IconButton variant="plain" size="md" color="neutral">
            <CloseRoundedIcon onClick={() => setIsVisible(false)}/>
          </IconButton>
        }
        >Your Article has been successfully deleted.</Alert>
      }
      </Box>
    );
}