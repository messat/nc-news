import Box from '@mui/joy/Box';
import CircularProgress from '@mui/joy/CircularProgress';

export default function LoadingCircularProgress() {
  return (
    <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "60vh"}}>
      <CircularProgress variant="solid" color='danger' sx={{    "--CircularProgress-size": "70px"}}/>
    </Box>
  );
}