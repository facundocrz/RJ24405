import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Container, Box, Link, Grid, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
    return (
      <>
        <Box
          px={{ xs: 3, sm: 10 }}
          py={{ xs: 5, sm: 5  }}
          bgcolor="text.secondary"
          color="white"
        >
          <Container maxWidth="lg">
            <Grid container spacing={5}>
              <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>Ayuda</Box>
                <Box>
                  <Link href="/" color="inherit">
                    Contacto
                  </Link>
                </Box>
                <Box>
                  <Link href="/" color="inherit">
                    Privacidad
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>Redes</Box>
                <Box>
                  <Link href="https://www.facebook.com/" target="_blank" color="inherit">
                    <Facebook />
                  </Link>
                </Box>
                <Box>
                  <Link href="https://www.instagram.com/" target="_blank" color="inherit">
                    <Instagram />
                  </Link>
                </Box>
                <Box>
                  <Link href="https://www.twitter.com/" target="_blank" color="inherit">
                    <Twitter />
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>Info</Box>
                <Box>
                  <Typography color="inherit">
                    Calle falsa 123, CABA
                  </Typography>
                </Box>
                <Box>
                  <Typography color="inherit">
                    (+54) 11 03034567
                  </Typography>
                </Box>
                <Box>
                  <Typography color="inherit">
                    Ventas@sigmah4rd.com
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
              Todos los derechos reservados &reg; SigmaH4rd {new Date().getFullYear()}
            </Box>
          </Container>
        </Box>
      </>
    );
  }