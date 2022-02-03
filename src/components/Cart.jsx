import React, { useContext } from "react";
import Container from '@mui/material/Container'
import { cartContext } from "../context/CartProvider";
import { Box } from "@mui/system";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { Delete } from '@mui/icons-material'

export default function Cart() {

  const { cart, clear } = useContext(cartContext)

  return (
    <Container maxWidth="lg">
      {cart.length !== 0 ?
        <Box>
          <Box>
            {cart.map(element => 
            <div style={{margin: '10px 0 10px 0'}}>
            <CartItem key={element.item.id} product={element}></CartItem>
            </div>)}
          </Box>
          <Button variant="outlined" color="error" startIcon={<Delete />} onClick={()=> clear()}>
            Vaciar carrito
          </Button>
        </Box>
        :
        <h2>El carrito está vacío</h2>
      }
    </Container>
  )
}