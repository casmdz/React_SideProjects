// import PageButton from "./Button" //this is the button we're using function 
import { Dialog, Button, DialogTitle, DialogContent, DialogActions, DialogContentText } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { pink } from '@mui/material/colors';

type Props = {
open: boolean;
onClose: () => void;
}

const FunFactDialogue = ( props: Props ) => {

if ( !props.open ) return (<></>);
return (
<>
<Dialog
  aria-labelledby='dialog-title'
>
  <DialogTitle id='dialog-title'>Fun Fact of the Day:</DialogTitle>
  <IconButton
    aria-label="close"
    sx={{ position: 'absolute', right: 8, top: 8, color: 'action' }}
    onClick={props.onClose}
  >
    <CloseIcon />
  </IconButton>

  <DialogContent >
    <DialogContentText paragraph>The bumblebee bat is the world's smallest mammal.</DialogContentText>
    <DialogContentText paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, atque?</DialogContentText>
  </DialogContent>
  <DialogActions>
  <Button autoFocus>Awesome!</Button>
  </DialogActions>
</Dialog>
</>
)
}

export default FunFactDialogue
