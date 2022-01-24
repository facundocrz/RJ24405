import React from "react";
import ItemCount from "./ItemCount";
import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const images = require.context('../img');

export default function Item({product}) {

    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image= {images(`./${product.picture}`)}
                    alt={product.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {product.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {"$" + product.price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <ItemCount product={product} initial={0}/>
                </CardActions>
            </Card>
        </>
    )
}