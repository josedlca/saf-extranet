import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, TextField, Typography, styled } from '@mui/material'
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
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
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
                    />
                </Box>
                <Box width={"100%"}>
                    <Typography variant='h6' sx={{fontWeight:"500", color: "#0d144d"}}>
                        Contraseña
                    </Typography>

                    <FormControl sx={{width:"100%", marginTop:"16px", marginBottom:"30px"}} variant="outlined">
                        <InputLabel htmlFor="password">Contraseña</InputLabel>
                        <OutlinedInput
                            id="password"
                            sx={{fieldset:{borderRadius:"10px"}, width:"100%"}}
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Contraseña"
                        />
                    </FormControl>
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