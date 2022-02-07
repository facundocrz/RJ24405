import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { Container, CircularProgress } from '@mui/material'
import { productos } from '../data';
import { useParams } from 'react-router-dom'

export default function ItemListContainer({ title }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    const { categoryId } = useParams();

    useEffect(() => {
        const promiseProd = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 200)
        })

        promiseProd
            .then((res) => {
                categoryId ?
                    setProducts(res.filter((item) => item.category === categoryId))
                    :
                    setProducts(res);
                setLoading(true)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [categoryId])

    return (
        <>
            <Container>
                {(loading) ?
                    <>
                        <h1>{categoryId ? categoryId : title}</h1>
                        <ItemList products={products} />
                    </>
                    :
                    <CircularProgress />}
            </Container>

        </>
    )
}