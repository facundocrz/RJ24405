import React from "react";
import Item from "./Item";
import { Grid, Typography } from '@mui/material/'

export default function ItemList({ products }) {

    return (
        <>
            
            <Grid
                container
                spacing={4}
                justify="center"
            >
                {products.length !== 0 ?
                products.map(item => {
                    return (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <Item product={item} />
                        </Grid>
                    )
                })
                :
                <Grid item  xs={12} sm={12} md={12}>
                <Typography variant="h4">
                    Actualmente no contamos con productos de esta categoría
                </Typography>
                </Grid>
                }
            </Grid>
        </>
    )
}