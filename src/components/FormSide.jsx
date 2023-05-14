import { Box, Button, Checkbox, Grid, Link, TextField, Typography, styled } from '@mui/material'
import React from 'react'

const FormSide = () => {
    const OwnTextField = styled(TextField)({
        required: true,
        width: "100%",
        autoFocus: true,
        marginTop: "18px",
        marginBottom: "30px",
        fieldset:{
            borderRadius: "10px",
        },
        input:{
            padding: "16px 20px"
        }
    })
  return (
    <Box 
        bgcolor={"#fff"}
        flex={1}
        display={"inline-flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"}
    >
        <Box sx={{minWidth:"60%"}}>
            <Typography component="h1" mb={4} variant="h3" sx={{fontWeight:"bold", color: "#0d144d"}}>
            Iniciar Sesion
            </Typography>
            <Box component="form" noValidate>
                <Box>
                    <Typography variant='h6' sx={{fontWeight:"500", color: "#0d144d"}}>
                        Documento de Identidad
                    </Typography>
                    <OwnTextField 
                    id='document' 
                    label="Documento de Identidad" 
                    name="document" 
                    autoComplete='Documento de identidad'
                    inputProps={{ sx: { borderRadius: 20 } }}
                    />
                </Box>
                <Box>
                    <Typography variant='h6' sx={{fontWeight:"500", color: "#0d144d"}}>
                        Contraseña
                    </Typography>
                    <OwnTextField 
                    id='password' 
                    label="Contraseña" 
                    name="password" 
                    autoComplete='current-password'
                    />
                </Box>
                <Button
                type="submit"
                fullWidth
                variant= "contained"
                sx={{ mt: 1, mb: 4, backgroundColor:"#0d144d", color: "#fff", padding: "24px 0px", borderRadius:"8px"}}
                >
                Enviar
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="h6" sx={{color: "#4a4f7a"}}>
                        Recuperar acceso a mi cuenta
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </Box>
  )
}

export default FormSide