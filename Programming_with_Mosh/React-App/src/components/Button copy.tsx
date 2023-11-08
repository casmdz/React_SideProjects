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
};
const handleCloseDia = () => {
setOpen(false);
};


return (
<>
<FunFactDialogue
  open={open} 
  onClose={handleCloseDia}/>

<Button
  variant='contained'
  color='secondary'
  sx={{ borderRadius: '6px'}}
  onClick={() => console.log('Yuh was pressed')}
>This Button
</Button>

<button 
color="error"
className="page-button p-3 bg-emerald-300" 
onClick={onPress}
>Click on me</button>

<button 
className="page-button p-3 bg-rose-400"
onClick={handleClickOpen}
>Fun Fact
</button>
</>
);
}

export default PageButton