import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { Box, Typography, Button } from '@mui/material'
import { Link } from "react-router-dom";

const images = require.context('../img');

export default function ItemDetail({ detail }) {

    const [quiantity, setQuantity] = useState();
    const [buttonCart, setButtonCart] = useState(false);

    function onAdd(count) {
        setQuantity(count);
        setButtonCart(true);
    }

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <Typography variant="h1" color="initial">
                    {detail.name}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} style={{ width: '100%' }}>
                    <img src={images(`./${detail.picture}`)} style={{ width: '800px', height: '800px' }}></img>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <h2>{"$" + detail.price}</h2>
                        <p>socket: {detail.socket}</p>
                        <p>frecuencia: {detail.frecuency}</p>
                        <p>nucleos: {detail.cores}</p>
                        {buttonCart ?
                            <Box container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <h3></h3>
                                <Button variant="outlined" color="success" size="small">
                                    <Link to={"/cart"} style={{ textDecoration: 'none', color: '#2e7d32' }}>
                                        Finalizar compra
                                    </Link>
                                </Button>
                            </Box>
                            :
                            <ItemCount stock={detail.stock} initial={1} onAdd={onAdd} />
                        }
                    </Box>
                </Box>
            </Box>
        </>
    )
}