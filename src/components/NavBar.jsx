import React from "react";
import { Box, AppBar, Toolbar, Typography, Container, Button } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Container maxWidth="lg">
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color='inherit'>
                                <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
                                    SIGMAH4RD
                                </Link>
                            </Typography>


                            <div>
                                <Button variant="text" color="inherit">
                                    <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
                                        productos
                                    </Link>
                                </Button>
                                <Button variant="text" color="inherit">
                                    <Link to={'/category/procesadores'} style={{ textDecoration: 'none', color: 'white' }}>
                                        procesadores
                                    </Link>
                                </Button>
                                <Button variant="text" color="inherit">
                                    <Link to={'/category/motherboards'} style={{ textDecoration: 'none', color: 'white' }}>
                                        motherboards
                                    </Link>
                                </Button>
                                <Button variant="text" color="inherit">
                                    <Link to={'/category/gabinetes'} style={{ textDecoration: 'none', color: 'white' }}>
                                        gabinetes
                                    </Link>
                                </Button>
                                <Button variant="text" color="inherit">
                                    <Link to={'/ayuda'} style={{ textDecoration: 'none', color: 'white' }}>
                                        ayuda
                                    </Link>
                                </Button>
                                <Button variant="text" color="inherit">
                                    <Link to={'/contacto'} style={{ textDecoration: 'none', color: 'white' }}>
                                        contacto
                                    </Link>
                                </Button>
                            </div>
                            <Button variant="icon" color="inherit">
                                <Link to={'/cart'} style={{ color: 'white' }}>
                                    <ShoppingCart />
                                </Link>
                            </Button>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
        </>
    )
}