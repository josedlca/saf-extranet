import styled from '@emotion/styled'
import { CurrencyExchange } from '@mui/icons-material'
import { Box, Button, Container,Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    const OwnTypoUp= styled(Typography)({
        fontSize:"20px",
        fontWeight:"400"
    })
    const OwnTypoDown= styled(Typography)({
        fontSize:"25px",
        fontWeight:"400"
    })
  return (
    <Box 
    width={"100%"} 
    sx={{
        position:"absolute", 
        bottom:"0",
        backgroundColor:"#0d144d",
        borderTopLeftRadius:"10px",
        borderTopRightRadius:"10px"
        }}>
        <Container
        maxWidth="xl"
        sx={{
            color:"#fff",
            padding:"40px 0",
            display:"flex"
        }}>
            <Box 
            flex={1}
            sx={{
                borderRight:"2px solid rgba(195, 196, 211, 0.5)",
                mr:"20px"
            }}
            >
                <OwnTypoUp>Facturas</OwnTypoUp>
                <OwnTypoDown>3</OwnTypoDown>
            </Box>
            <Box 
            flex={1}
            sx={{
                borderRight:"2px solid rgba(195, 196, 211, 0.5)",
                mr:"20px"
            }}
            >
                <OwnTypoUp>Clientes</OwnTypoUp>
                <OwnTypoDown>3</OwnTypoDown>
            </Box>
            <Box 
            flex={2}
            sx={{
                borderRight:"2px solid rgba(195, 196, 211, 0.5)",
                mr:"20px"
            }}
            >
                <OwnTypoUp>Monto total Soles</OwnTypoUp>
                <OwnTypoDown>s/.15,543.66</OwnTypoDown>
            </Box>
            <Box 
            flex={2}
            >
                <OwnTypoUp>Monto total Dolares</OwnTypoUp>
                <OwnTypoDown>$15,543.66</OwnTypoDown>
            </Box>
            <Box
            flex={3}
            sx={{display:"inline-flex",
                justifyContent: "end"
            }}
            >
                <Button
                variant="contained"
                sx={{
                    backgroundColor:"#4ee189",
                    color:"#0d144d",
                    fontWeight:"600",
                    width: "90%"
                }}
                startIcon={<CurrencyExchange />} 
                >
                    Enviar a negociar
                </Button>
            </Box>
        </Container>
    </Box>
  )
}

export default Footer