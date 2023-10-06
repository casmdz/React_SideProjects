import { Drawer, List, ListItem, ListItemText, ListItemButton, IconButton, Divider } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useShoppingCart } from '../context/ShoppingCartContext';

type ShoppingCartProps = {
  isOpen:boolean
}


export function ShoppingCartDrawer({ isOpen }: ShoppingCartProps) {
  const value = 0

  const { closeCart } = useShoppingCart();

  return (
    <>
    <Drawer anchor="left"
    open={isOpen}  
    sx={{width: 250 }}
    // variant='persistent'
    onClose={closeCart}
    >

      <div className='flex items-center justify-end'>
        <IconButton aria-label='close-button' onClick={closeCart}>
          <CloseRoundedIcon />
        </IconButton>
      </div>
      <Divider />
      
        <List dense sx={{ bgcolor: 'background.paper' }}>
            <ListItem>
              <ListItemButton>
                <ListItemText primary={`Line item ${value + 1}`} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemText primary={`Line item ${value + 2}`} />
              </ListItemButton>
            </ListItem>
        </List>
    </Drawer>
    </>
  )
}
