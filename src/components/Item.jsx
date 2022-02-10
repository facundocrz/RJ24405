import React from "react";
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from "@mui/material";
import {Link} from 'react-router-dom'


export default function Item({product}) {

    return (
        <>
            <Card style={{width:'400px'}}>
                <CardMedia
                    component="img"
                    height="140"
                    image= {product.image}
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
                </CardActions>
            </Card>
        </>
    )
}