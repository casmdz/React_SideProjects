// import PageButton from "./Button" //this is the button we're using function 
import { Dialog, Button, DialogTitle, DialogContent, DialogActions, DialogContentText } from '@mui/material';
// import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { pink } from '@mui/material/colors';

// import { useState } from 'react';


type Props = {
  open: boolean;
  onClose: () => void;
}


const FunFactDialogue = ( props: Props ) => {
  // if ( !props.open ) return (<></>);
  return (
    <>
      {/* button to open fun fact:
      onClick={() => setOpen(true)}
    */}
      <Dialog
        aria-labelledby='dialog-title'
        open={props.open}
      >
        <DialogTitle id='dialog-title' >Fun Fact of the Day:</DialogTitle>

        <IconButton
          aria-label="close"
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'action',
          }}
          onClick={props.onClose}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent dividers>
          <DialogContentText id='dialog-description' paragraph>The bumblebee bat is the world's smallest mammal.</DialogContentText>
          <DialogContentText id='dialog-description' paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, atque?</DialogContentText>
          <DialogContentText id='dialog-description' paragraph>Beavers have orange teeth, as they contain a lot of iron. The mineral makes the teeth particularly resistant to external forces.</DialogContentText>
        </DialogContent>

        <DialogActions>
        <Button 
        autoFocus 
        sx={{ color: pink[500] }}
        onClick={props.onClose}
        >Awesome!
        </Button>
        </DialogActions>

      </Dialog>
    </>
  )
}

export default FunFactDialogue
