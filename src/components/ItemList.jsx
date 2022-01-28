import React, { useEffect, useState } from "react";
import Item from "./Item";
import { Box } from '@mui/material/'

export default function ItemList({products}) {
    
    return (
        <>
            <Box sx={{display:'flex', flexDirection:'row', flexWrap: 'wrap'}}>
                {products.map(item => {
                    return (
                            <div key={item.id} style={{margin: '5px'}}>
                            <Item product={item}/>
                            </div>
                    )
                })}
            </Box>
        </>
    )
}