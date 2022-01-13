import React from "react";
import Container from '@mui/material/Container'

export default function ItemListCointainer({greeting}){
    return (
        <>
        <Container>
        <h1>{greeting}</h1>
        </Container>
        </>
    )
}