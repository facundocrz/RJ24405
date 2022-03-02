import { DeleteOutline } from "@mui/icons-material";
import { Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { cartContext } from "../context/CartProvider";

export default function CartItem({ product }) {

    const { removeItem } = useContext(cartContext)

    return (
        <Card>
            <Grid
                container
                justifyContent='center'
                alignItems='center'
            >
                <Grid item xs={12} sm={12} md={2} style={{display: 'flex', justifyContent:'center'}}>
                    <CardMedia
                        component="img"
                        sx={{ width: '100px', height:'100px'}}
                        image={product.item.image}
                        alt={product.item.name}
                        
                    />
                </Grid>

                <Grid item xs={12} sm={12} md={5}>
                    <Typography component="h2" variant="h5" style={{ textAlign: 'center' }}>
                        {product.item.name}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={1}>
                    <Typography component="h2" variant="h5" style={{ textAlign: 'center' }}>
                        ${product.item.price}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={1}>
                    <Typography component="h2" variant="h5" style={{ textAlign: 'center' }}>
                        {product.quantity}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={2}>
                    <Typography component="h2" variant="h5" style={{ textAlign: 'center' }}>
                        ${product.quantity * product.item.price}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={1} style={{display: 'flex', justifyContent:'center'}}>
                    <Button variant="outlined" color="error" onClick={() => removeItem(product.item.id)}>
                        <DeleteOutline />
                    </Button>
                </Grid>
            </Grid>
        </Card>
    )
}