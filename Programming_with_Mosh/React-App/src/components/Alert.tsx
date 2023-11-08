import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { ReactNode } from 'react';

// make it dynamic 
interface Props{
  children: ReactNode ;
}


const PageAlert = ( { children } : Props ) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">This is an error alert — {children}</Alert>
      <Alert severity="warning">This is a warning alert — {children}</Alert>
      <Alert severity="info">This is an info alert — {children}</Alert>
      <Alert severity="success">This is a success alert — {children}</Alert>
    </Stack>


  )
}
export default PageAlert
