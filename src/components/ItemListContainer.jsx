import React from "react";
import ItemList from "./ItemList";
import Container from '@mui/material/Container'

export default function ItemListContainer({greeting}){
    return (
        <>
        <Container>
            <h1>{greeting}</h1>
            <ItemList/>
        </Container>
        </>
    )
}