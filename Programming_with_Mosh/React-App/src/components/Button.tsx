import Button from "@mui/material/Button";
import { useState } from 'react';
import FunFactDialogue from "./FunFactDialogue";

interface Props {
    onPress: () => void;
}



const PageButton = ({onPress}: Props) => {

let [open, setOpen] = useState(false);
const handleClickOpen = () => {
  setOpen(true);
  console.log('Fun Fact button pressed');
};
const handleCloseDia = () => {
  setOpen(false);
};


return (
<>
  <FunFactDialogue
    open={open} 
    onClose={handleCloseDia}
  />

  <Button
    variant='contained'
    color='secondary'
    sx={{
      textTransform: 'none',
      m: 3,
      p: 2,
      borderRadius: '6px',
    }}
    onClick={() => console.log('Yuh was pressed')}
  >Yuh
  </Button>
  
  <button 
  color="error"
  className="page-button p-3 bg-emerald-300 rounded m-3 hover:bg-emerald-800 hover:text-white" 
  //disableElevation
  onClick={onPress}
  >Click on me</button>

  <button 
  className="page-button p-3 bg-rose-400 rounded m-3 hover:bg-rose-800 hover:text-white"
  onClick={handleClickOpen}
  >Fun Fact
  </button>

</>
);
}

export default PageButton