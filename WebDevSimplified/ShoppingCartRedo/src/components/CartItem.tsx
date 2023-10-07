import { useShoppingCart } from "../context/ShoppingCartContext";
import { Stack, Box, Button } from "@mui/material";
// import DeleteIcon from '@mui/icons-material/Delete';

import storeItems from "../data/items.json";
import formatCurrency from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export default function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    // we want to render a horizontal stack
    <>
      <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" className="flex items-center">
      {/*  justify-between justifyContent="space-between" */}
        <Box>
          <img src={item.imgUrl} className=" h-20 w-24 object-cover rounded-lg" />
        </Box>
        <div className=" me-auto ">
            <div>
                {item.name}{" "}
                {quantity > 1 && (
                    <span className="text-slate-500 text-xs">
                        x{quantity}
                    </span>)}
            </div>
            <div className="text-slate-500 text-sm">{formatCurrency(item.price)}</div>
        </div>
        <div>{formatCurrency(item.price * quantity )}</div>

        <Button variant="outlined" color="error" sx={{minWidth:"40px"}} 
        onClick={()=> removeFromCart(item.id)}>&times;</Button>
      </Stack>
    </>
  );
}
