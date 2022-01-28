import React from "react";
import ItemCount from "./ItemCount";
import { Box, Typography } from '@mui/material'

const images = require.context('../img');

export default function ItemDetail({ detail }) {

    function onAdd(count) {
        alert(detail.name+" se agrego al carrito");
    }

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection:'column' }}>
                <Typography variant="h1" color="initial">
                    {detail.name}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection:'row', justifyContent: 'space-between' }} style={{width:'100%'}}>
                    <img src={images(`./${detail.picture}`)} style={{ width: '800px', height: '800px' }}></img>
                    <Box sx={{ display: 'flex', flexDirection:'column' }}>
                        <h2>{"$" + detail.price}</h2>
                        <p>socket: {detail.socket}</p>
                        <p>frecuencia: {detail.frecuency}</p>
                        <p>nucleos: {detail.cores}</p>
                        <ItemCount stock={detail.stock} initial={1} onAdd={onAdd}/>
                    </Box>
                </Box>
            </Box>
        </>
    )
}