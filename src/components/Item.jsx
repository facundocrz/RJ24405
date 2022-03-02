import React from "react";
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from "@mui/material";
import {Link} from 'react-router-dom'


export default function Item({product}) {

    return (
        <>
            <Card style={{minWidth:'200px', height:'350px', display: 'flex', flexDirection:'column', justifyContent:'space-between', alignItems: 'center'}} variant="outlined">
                <CardMedia
                    component="img"
                    height="140"
                    image= {product.image}
                    alt={product.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" style={{textAlign: 'center'}}>
                        {product.name}
                    </Typography>
                    <Typography variant="h5" style={{textAlign: 'center'}}>
                        {"$" + product.price}
                    </Typography>
                </CardContent>
                <CardActions >
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