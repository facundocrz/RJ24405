import { Button, Card, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { cartContext } from "../context/CartProvider";
import PaymentForm from "./PaymentForm"

const boxStyle = {
    margin: "30px 0px",
    display: "flex",
    justifyContent: "space-between"
}

export default function CartSummary() {

    const [open, setOpen] = useState(false)
    const { totalQuantity, totalPrice } = useContext(cartContext)


    return (
        <>
            <Container>
                <Card style={{
                    padding: "20px",
                    maxHeight: "250px",
                    margin: "10px",
                    maxWidth: "500px"
                }}>
                    <Typography variant="h5" component="div" gutterBottom>
                        RESUMEN
                    </Typography>
                    <Box style={boxStyle}>
                        <span>Cantidad de productos</span>
                        <span>{totalQuantity()}</span>
                    </Box>
                    <Box style={boxStyle}>
                        <span>Envío</span>
                        <span>gratis</span>
                    </Box>
                    <Box style={boxStyle}>
                        <span>Total</span>
                        <span>{'$ ' + totalPrice()}</span>
                    </Box>
                    <Button onClick={() => setOpen(true)}>COMPRAR</Button>
                    <PaymentForm open={open} setOpen={setOpen} />
                </Card>
            </Container>
        </>
    )
}