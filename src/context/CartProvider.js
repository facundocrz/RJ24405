import React, { createContext, useState } from "react";

export const cartContext = createContext();

export default function CartProvider({ children }) {

    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            const indexItem = cart.findIndex(element => element.item.id === item.id)
            cart[indexItem].quantity = cart[indexItem].quantity + quantity
            setCart([...cart])
        } else {
            setCart([...cart, { item: item, quantity: quantity }])
        }
    }

    const isInCart = (id) => {
        return cart.some(element => element.item.id === id)
    }

    const removeItem = (id) => {
        const updatedCart = cart.filter(element => element.item.id !== id)
        setCart(updatedCart)
    }

    const clear = () => {
        setCart([])
    }

    return (
        <cartContext.Provider value={{ cart, addItem, removeItem, clear }}>
            {children}
        </cartContext.Provider>
    )
}