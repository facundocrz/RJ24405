import React from "react";
import ItemCount from "./ItemCount";
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from "@mui/material";
import {Link} from 'react-router-dom'

const images = require.context('../img');

export default function Item({product}) {

    function onAdd(count) {
        alert(product.name+" se agrego al carrito");
    }

    return (
        <>
            <Card style={{width:'400px'}}>
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
                <CardActions style={{display: 'flex', flexDirection:'column'}}>
                    <Button variant="outlined" color="primary">
                      <Link to={`/item/${product.id}`} style={{ textDecoration: 'none', color: '#1976d2' }}>
                          ver detalle
                      </Link>
                    </Button>
                    <ItemCount stock={product.stock} initial={0} onAdd={onAdd}/>
                </CardActions>
            </Card>
        </>
    )
}