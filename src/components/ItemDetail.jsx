import React from "react";
import ItemCount from "./ItemCount";
import { Box } from '@mui/material'

const images = require.context('../img');

export default function ItemDetail({ detail }) {
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection:'column' }}>
                <h1>{detail.name}</h1>
                <Box sx={{ display: 'flex', flexDirection:'row', justifyContent: 'space-between' }} style={{width:'100%'}}>
                    <img src={images(`./${detail.picture}`)} style={{ width: '800px', height: '800px' }}></img>
                    <Box sx={{ display: 'flex', flexDirection:'column' }}>
                        <h2>{"$" + detail.price}</h2>
                        <p>socket: {detail.socket}</p>
                        <p>frecuencia: {detail.frecuency}</p>
                        <p>nucleos: {detail.cores}</p>
                        <p>socket: {detail.socket}</p>
                        <ItemCount product={detail} initial={1}/>
                    </Box>
                </Box>
            </Box>
        </>
    )
}