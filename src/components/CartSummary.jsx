import { Button, Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { cartContext } from "../context/CartProvider";

const boxStyle ={margin: "30px 0px",
display: "flex",
justifyContent: "space-between"}

export default function CartSummary() {

    const { totalQuantity, totalPrice } = useContext(cartContext)

    return (
        <>
            <Card style={{
                padding: "20px",
                height: "250px",
                margin: "10px",
                width: "500px"
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
                <Button>COMPRAR</Button>
            </Card>

        </>
    )
}