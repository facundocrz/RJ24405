import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { Container, CircularProgress } from '@mui/material'
import { useParams } from 'react-router-dom'
import { getFirestore } from "../firebase/firebase";

export default function ItemListContainer({ title }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("products");


        (categoryId) ?
            db
                .collection("products")
                .where("category", "==", categoryId)
                .get()
                .then((res) => {
                    setProducts(res.docs.map(((doc) => ({ ...doc.data(), id: doc.id }))))
                })
                .catch((err)=>{
                    console.log("error reading products from firebase ", err)
                })
                .finally(() => {
                    setLoading(false)
                })
            :
            db 
             .collection("products")
                .get()
                .then((res)=>{
                    setProducts(res.docs.map(((doc) => ({ ...doc.data(), id: doc.id }))))
                })
                .catch((err)=>{
                    console.log("error reading products from firebase ", err)
                })
                .finally(() => {
                    setLoading(false)
                })
            
}, [categoryId])

return (
    <>
        <Container>
            {(!loading) ?
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