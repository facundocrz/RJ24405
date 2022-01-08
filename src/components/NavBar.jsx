import React from "react";
import { AppBar, Toolbar, Typography, Container, Button} from '@mui/material'

export default function NavBar() {
    return (
        <>
            <AppBar position="static">
                <Container maxWidth="lg">
                    <Toolbar>
                        <Typography variant="h6">
                            TIENDA
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
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}