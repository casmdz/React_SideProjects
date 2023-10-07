import { Drawer, IconButton, Divider } from '@mui/material';
import { Box, Typography, Stack } from '@mui/material';

// import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useShoppingCart } from '../context/ShoppingCartContext';
import CartItem from './CartItem';
import storeItems from "../data/items.json";
import formatCurrency from '../utilities/formatCurrency';

type ShoppingCartProps = {
  isOpen:boolean
}


export function ShoppingCartDrawer({ isOpen }: ShoppingCartProps) {

  const { closeCart, cartItems } = useShoppingCart();

  return (
    <>
    <Drawer anchor="left" open={isOpen} onClose={closeCart}>
    <Box p={2} 
    // textAlign={"center"} 
    width={400}>

      <div className='flex items-center justify-end'>
        <IconButton aria-label='close-button' onClick={closeCart}>
          <CloseRoundedIcon />
        </IconButton>
      </div>

      <Divider />
      <Typography variant="h5" className=' py-4 text-center'>Cart</Typography>
      

      <Stack spacing={{ xs: 1, sm: 2 }} useFlexGap flexWrap="wrap">
        {cartItems.map(item => (
          <CartItem key={item.id} {...item} />
          ))}

        <div className=' ms-auto font-bold text-lg' >
          Total {formatCurrency(cartItems.reduce((total, cartItem) => {
            const item = storeItems.find((i) => i.id === cartItem.id)
            return total + (item?.price || 0 ) * cartItem.quantity //if theres no item, default 0
          },0) //default our initial value to 0
          )}
        </div>

      </Stack>

    </Box>
    </Drawer>
    </>
  )
}
