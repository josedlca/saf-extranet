import { Folder, UploadFile } from '@mui/icons-material';
import { Box, Button, Container, FormControl, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'

const ChargeSide = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <Container 
    maxWidth="xl"
    sx={{
        display:"flex",
        flexDirection:"column"
    }}
    >
        <Box display={"flex"} padding={"50px 0"} justifyContent={"space-between"} alignItems={"center"}>
            <Box width={"30%"}>
                <Typography
                    fontSize={"25px"}
                    fontWeight={"500"}
                    color={"#0d144d"}
                    mb={"15px"}
                >Seleccione al cliente</Typography>
                <FormControl sx={{ minWidth: 120, width:"100%", borderColor:"#0d144d"}}>
                    <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label'
                    }}
                    >
                        <MenuItem value="">
                            <em>Gloria S.A</em>
                        </MenuItem>
                        <MenuItem value={10}>Coca Cola</MenuItem>
                        <MenuItem value={20}>Alicorp</MenuItem>
                        <MenuItem value={30}>Magnesol</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box>
                <Button 
                variant="outlined" 
                sx={{
                    color: "#0d144d", 
                    fontSize:"19px",
                    padding: "10px 50px",
                    border:"1px solid #0d144d", 
                    "&:hover":{
                        backgroundColor:"#0d144d", 
                        color: "#fff"}}} 
                    startIcon={<UploadFile />}
                >
                Subir Facturas
                </Button>
            </Box>
        </Box>

        <Box sx={{display:"flex", width:"100%" , padding:"70px 0", justifyContent:"center"}}>
            <Box sx={{display:"flex", flexDirection:"column",width:"70%", justifyContent:"center", alignItems:"center"}}>
                <Box sx={{color:"#0d144d", textAlign:"center"}}>
                    <Folder sx={{fontSize:"150px"}}/>
                </Box>
                
                <Typography variant='h1' sx={{fontSize:"40px",marginBottom:"35px", textAlign:"center", fontWeight:"500", color:"#0d144d"}}>Carga el XML y PDF de tus facturas</Typography>
                <Button 
                variant="contained" 
                sx={{
                    color: "#fff", 
                    width:"50%",
                    fontSize:"19px",
                    padding: "10px 50px",
                    backgroundColor:"#4ee189",
                    border:"1px solid #4ee189", 
                    "&:hover":{
                        backgroundColor:"#fff", 
                        color: "#4ee189"}}} 
                    startIcon={<UploadFile />}
                >
                    Subir Facturas
                </Button>
            </Box>
        </Box>
    </Container>
  )
}

export default ChargeSide