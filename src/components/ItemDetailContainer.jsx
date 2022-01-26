import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import {CircularProgress} from '@mui/material'

export default function ItemDetailContainer() {
    const [details, setDetails] = useState([])
    const [loading, setLoading] = useState(false)
    const getItem = () => {
        const promiseDetail = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([{ id: 1, name: 'i9 12900K', price: 100000, socket: 'LGA1700', cores: '12', frecuency: '3.20GHz', stock: 10, picture: 'i9-12900k.jpg' },
                { id: 2, name: 'i9 11900K', price: 80000, socket: 'LGA1200', cores: '8', frecuency: '3.50GHz', stock: 20, picture: 'i9-11900k.jpg' }])
            },5000)
        })

        promiseDetail
            .then((res) => {
                setDetails(res)
                setLoading(true)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        getItem()
    }, [])
    return (
        <>
        {
            (loading) ?
                <ItemDetail detail={details[0]} />
            :
            <CircularProgress />
        }
        </>
    )
}