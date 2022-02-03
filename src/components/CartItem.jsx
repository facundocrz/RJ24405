import { DeleteOutline } from "@mui/icons-material";
import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useContext } from "react";
import { cartContext } from "../context/CartProvider";

const images = require.context('../img');

export default function CartItem({ product }) {

    const { removeItem } = useContext(cartContext)

    return (
        <Card sx={{display: 'flex',alignItems: 'center'}}>
            <CardMedia
                component="img"
                sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                image={images(`./${product.item.picture}`)}
                alt={product.item.name}
            />
            <CardContent style={{width:'80%'}} sx={{display:'flex',justifyContent: 'space-between'}}>
                <Typography component="h2" variant="h5">
                    {product.item.name}
                </Typography>
                <Typography component="h2" variant="h5">
                    ${product.item.price}
                </Typography>
                <Typography component="h2" variant="h5">
                    {product.quantity}
                </Typography>
                <Typography component="h2" variant="h5">
                    ${product.quantity * product.item.price}
                </Typography>
                <Button variant="outlined" color="error" onClick={()=> removeItem(product.item.id)}>
                    <DeleteOutline />
                </Button>
            </CardContent>
        </Card>
    )
}