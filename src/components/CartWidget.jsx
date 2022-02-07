import { ShoppingCart } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../context/CartProvider";

export default function CartWidget() {

    const {totalQuantity} = useContext(cartContext)

    return (
        <IconButton aria-label="cart">
            <Link to={'/cart'} style={{ color: 'white' }}>
                <Badge badgeContent={totalQuantity()} color="error">
                <ShoppingCart />
                </Badge>
            </Link>
        </IconButton>
    )
}