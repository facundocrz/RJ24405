import React from "react";
import {Box, AppBar, Toolbar, Typography, Container, Button} from '@mui/material'
import {ShoppingCart} from '@mui/icons-material'

export default function NavBar() {
    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Container maxWidth="lg">
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                SIGMAH4RD
                            </Typography>
                            <div> 
                                <Button variant="text" color="inherit">
                                    productos
                                </Button>
                                <Button variant="text" color="inherit">
                                    ayuda
                                </Button>
                                <Button variant="text" color="inherit">
                                    contacto
                                </Button>
                            </div>
                            <Button variant="icon" color="inherit">
                                <ShoppingCart/>
                            </Button>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
        </>
    )
}