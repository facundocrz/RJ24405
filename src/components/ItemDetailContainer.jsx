import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { CircularProgress, Container } from '@mui/material'
import { useParams } from 'react-router-dom'
import { getFirestore } from "../firebase/firebase";


export default function ItemDetailContainer() {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("products");
        const item = itemCollection.doc(itemId);

        item.get().then((doc) => {
            if (!doc.exists) {
                console.log('item does not exist');
                return
            }
            setProduct({ id: doc.id, ...doc.data() });
        }).catch((err) => {
            console.log('Error searching item', err);
        }).finally(() => {
            setLoading(false)
        })
    }, [itemId])
    return (
        <Container sx={{minHeight:'700px'}}>
            {
                (!loading) ?
                    <ItemDetail product={product} />
                    :
                    <CircularProgress style={{
                        position: 'fixed',
                        top: '50%',
                        right: '50%'
                    }} />
            }
        </Container>
    )
}