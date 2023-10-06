//maybe the most confusing component but the rendering should be easier
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import formatCurrency from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    const { 
        getItemQuantity, 
        increaseCartQuantity, 
        decreaseCartQuantity, 
        removeFromCart 
    } = useShoppingCart()


    const quantity = getItemQuantity(id)

    return (
        <>
            <h2 className=" text-amber-700">yessir</h2>
            <Card className="h-100">
                <CardMedia sx={{ height: 200, objectFit: "cover" }} image={imgUrl} />

                <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        sx={{
                            display: "flex",
                            marginBottom: 2,
                            alignItems: "baseline",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                        }}
                    >
                        <span>{name}</span>
                        <span
                            style={{
                                color: "#888",
                                fontWeight: 300,
                                marginInlineStart: 12,
                                fontSize: "1rem",
                            }}
                        >
                            {formatCurrency(price)}
                        </span>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica.
                    </Typography>
                </CardContent>

                {/* <Box> */}
                <CardActions className="flex flex-col items-center">
                    {quantity === 0 ? (
                        <Button variant="contained" fullWidth onClick={() => increaseCartQuantity(id)}>
                            Add To Cart
                        </Button>
                    ) : (
                        <div className="flex flex-col items-center justify-center gap-1.5">
                            <div
                                className="flex items-center justify-center gap-1.5"
                            >
                                <Button variant="contained" onClick={() => decreaseCartQuantity(id)}>-</Button>
                                <div><span className="font-semibold text-lg">{quantity}</span> in cart
                                </div>
                                <Button variant="contained" onClick={() => increaseCartQuantity(id)}>+</Button>
                            </div>
                            <Button variant="contained" color="error" onClick={() => removeFromCart(id)}>Remove</Button>
                        </div>
                    )}
                </CardActions>
                {/* </Box> */}
            </Card>
        </>
    );
}
