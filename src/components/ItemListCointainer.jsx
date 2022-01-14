import React from "react";
import Container from '@mui/material/Container'
import ItemCount from "./ItemCount";

export default function ItemListCointainer({greeting}){
    return (
        <>
        <Container>
            <h1>{greeting}</h1>
            <ItemCount stock={10} initial={1}/>
        </Container>
        </>
    )
}