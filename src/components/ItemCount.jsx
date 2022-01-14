import React, {useState} from "react";
import {Box} from '@mui/material/'
import {ArrowForwardIos,ArrowBackIosNew} from '@mui/icons-material'
import { Button } from '@mui/material'


export default function ItemCount({stock, initial}){

    
    const [count, setCount] = useState(initial);
    return (
        <>
            <Box container sx={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
                <Box maxWidth="lg" sx={{display:'flex', flexDirection:'row', alignItems: 'center'}}>
                    <ArrowBackIosNew color="primary" sx={{ whiteSpace: 'normal' }} onClick={()=>{if (count > 1) setCount(count-1)}}/>
                    <h3>{count}</h3>
                    <ArrowForwardIos color="primary" onClick={()=>{if (count < stock) setCount(count+1)}}/>
                </Box>
                <Button variant="outlined" color="primary" size="small">
                    Agregar al carrito
                </Button>
            </Box>
        </>
    )
}