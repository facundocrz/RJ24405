import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import {CircularProgress, Container} from '@mui/material'
import {productos} from '../data';
import {useParams} from 'react-router-dom'

export default function ItemDetailContainer() {
    const [details, setDetails] = useState([])
    const [loading, setLoading] = useState(false)
    const {itemId} = useParams();
    const getItem = () => {
        const promiseDetail = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            },2000)
        })

        promiseDetail
            .then((res) => {
                setDetails(res.find(item => item.id === parseInt(itemId)))
                setLoading(true)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        getItem()
    }, [itemId])
    return (
        <Container>
        {
            (loading) ?
                <ItemDetail detail={details} />
            :
            <CircularProgress />
        }
        </Container>
    )
}