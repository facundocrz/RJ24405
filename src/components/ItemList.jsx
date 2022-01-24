import React, { useEffect, useState } from "react";
import Item from "./Item";
import { Box } from '@mui/material/'

export default function ItemList() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const promiseProd = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([{id: 1, name: 'i9 12900K', price: 100000, stock: 10, picture: 'i9-12900k.jpg' },
                {id: 2, name: 'i9 11900K', price: 80000, stock: 20, picture: 'i9-11900k.jpg' },
                {id: 3, name: 'i9 10900K', price: 65000, stock: 30, picture: 'i9-10900k.jpg' }])
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
                            <div key={item.id} style={{margin: '5px'}}>
                            <Item product={item}/>
                            </div>
                    )
                })}
            </Box>
        </>
    )
}