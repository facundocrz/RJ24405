import React, { useState, useContext, useRef } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, Typography } from '@mui/material'
import { Box } from "@mui/system";
import { cartContext } from "../context/CartProvider";
import firebase from "firebase";
import { getFirestore } from "../firebase/firebase"

export default function PaymentForm({ open, setOpen }) {

  const { cart, totalPrice, clear } = useContext(cartContext)

  const email = useRef()
  const name = useRef()
  const surname = useRef()
  const province = useRef()
  const city = useRef()
  const address = useRef()
  const zc = useRef()
  const [orderId, setOrderId] = useState();

  const handleClick = (event) => {
    event.preventDefault();
    const db = getFirestore();
    const orders = db.collection("orders");
    const myOrder = {
      buyer: {
        name: name.current.value,
        email: email.current.value,
        surname: surname.current.value,
        province: province.current.value,
        city: city.current.value,
        address: address.current.value,
        zc: zc.current.value,
      },
      items: cart,
      total: totalPrice(),
      date: firebase.firestore.Timestamp.fromDate(new Date())
    }

    orders.add(myOrder)
      .then(({ id }) => {
        setOrderId(id)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <Dialog open={open} maxWidth="md">
        {!orderId ?
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            autoComplete="off"
            onSubmit={handleClick}
          >
            <DialogTitle>
              Completá tus datos
            </DialogTitle>
            <DialogContent>
              <Grid container spacing={0}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    variant="outlined"
                    label="nombre"
                    inputRef={name}
                  />
                  <TextField
                    required
                    variant="outlined"
                    label="apellido"
                    inputRef={surname}
                  />
                  <TextField
                    required
                    variant="outlined"
                    label="email"
                    inputRef={email}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    variant="outlined"
                    label="provincia"
                    inputRef={province}
                  />
                  <TextField
                    required
                    variant="outlined"
                    label="localidad"
                    inputRef={city}
                  />
                  <TextField
                    required
                    variant="outlined"
                    label="domicilio"
                    inputRef={address}
                  />
                  <TextField
                    required
                    variant="outlined"
                    label="código postal"
                    inputRef={zc}
                  />
                </Grid>
              </Grid>

            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpen(false)}>Volver</Button>
              <Button
                color="primary"
                variant="contained"
                type='submit'
              >
                Continuar
              </Button>
            </DialogActions>
          </Box>
          :
          <>
            <>
            <Typography variant="h4" style={{textAlign: 'center'}}>
                Gracias por tu compra!
              </Typography>
              <Typography variant="h5" style={{textAlign: 'center'}}>
                Te enviamos al mail los detalles para que puedas continuar con el seguimiento de tu pedido
              </Typography>
              <Typography variant="p" style={{textAlign: 'center'}}>
              </Typography>
              <Typography variant="h6" style={{textAlign: 'center'}}>
                Tu código de orden es: {orderId}
              </Typography>
              <Button onClick={() => clear()}>Volver</Button>
            </>
          </>}
      </Dialog>
    </>
  );
};