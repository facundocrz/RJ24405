import React, { useState } from "react";
import { Box } from '@mui/material/'
import { ArrowForwardIos, ArrowBackIosNew } from '@mui/icons-material'
import { Button} from '@mui/material'


export default function ItemCount({ product, initial }) {

    const [count, setCount] = useState(initial);

    const onAdd = () => {
        alert(product.name+" se agrego al carrito");
        product.stock = product.stock - count;
        setCount(0);
    }

    return (
        <>
            <Box container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Box style={{width: '100%'}}  maxWidth="lg" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <ArrowBackIosNew color="primary" sx={{ whiteSpace: 'normal' }} onClick={() => { if (count > 0) setCount(count - 1) }} />
                    <h3>{count}</h3>
                    <ArrowForwardIos color="primary" onClick={() => { if (count < product.stock) setCount(count + 1) }} />
                </Box>
                <Button variant="outlined" color="primary" size="small" onClick={onAdd} >
                    Agregar al carrito
                </Button>
            </Box>
        </>
    )
}