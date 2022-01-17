import React, { useEffect, useState } from "react";
import Item from "./Item";
import { Box } from '@mui/material/'

export default function ItemList() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const promiseProd = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([{ name: 'i9 12900K', price: 100000, stock: 10 },
                { name: 'i7 12700K', price: 60000, stock: 20 },
                { name: 'i5 12600K', price: 45000, stock: 30 }])
            }, 4000)
        })

        promiseProd
            .then((res) => {
                setProducts(res)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])

    return (
        <>
            <Box sx={{display:'flex', flexDirection:'row', alignItems: 'center'}}>
                {products.map(item => {
                    return (
                        <>
                            <div style={{margin: '5px'}}>
                            <Item product={item}/>
                            </div>
                        </>
                    )
                })}
            </Box>
        </>
    )
}