import Box from '@mui/joy/Box';
import Alert from '@mui/joy/Alert';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import IconButton from '@mui/joy/IconButton';
import { useState } from "react"

export function ArticleAlert(){
    const [isVisible, setIsVisible] = useState(true)
    return (
      
      <Box sx={{ display: 'flex', width: '100%', justifyContent: "center",  marginBottom: "30px", marginTop: "-27px" }}>
        {isVisible &&  <Alert variant="soft" color='success'
        endDecorator={
          <IconButton variant="plain" size="md" color="neutral">
            <CloseRoundedIcon onClick={() => setIsVisible(false)}/>
          </IconButton>
        }
        >Your article has been successfully posted!</Alert>
      }
      </Box>
    );
}