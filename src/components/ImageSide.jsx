import { Box, Typography } from '@mui/material'
import React from 'react'

const ImageSide = () => {
  return (
    <Box 
        bgcolor={"#0d144d"}
        flex={1}
        height={"100%"}
        sx={{borderTopRightRadius: "10px", borderBottomRightRadius: "10px"}}
    >
        <Box 
          sx={{width: "40%", height:"87px"}} 
          p={"48px 60px"}
          >
          <img 
          width={"100%"} 
          height={"100%"}
          src='https://image-placeholder.com/images/image-placeholder.png'
          />
        </Box>
        <Box
          display={"inline-flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Box 
          minHeight={"420px"} 
          height={"420px"} 
          minWidth={"70%"}
          p={"0 40px"} 
          mb={"50px"}>
            <img 
            width={"100%"} 
            height={"100%"}
            src='https://img.freepik.com/free-vector/money-bag-background-design_1270-41.jpg?w=360'
            />
          </Box>
          <Box
          p={"0 30px"}
          width={"70%"}
          >
            <Typography 
            variant='h3' 
            textAlign={"center"} 
            fontWeight={"bold"} 
            color={"#fff"}
            marginBottom={"40px"}
            >
              La solución financiera para empresas en crecimiento
            </Typography>
            <Typography 
            variant='h4' 
            textAlign={"center"} 
            fontWeight={"normal"} 
            color={"#fff"} 
            p={"0 50px"}
            sx={{fontSize:"30px"}}>
              Nos adaptamos a las necesidades de tu empresa en crecimiento
            </Typography>
          </Box>
        </Box>
    </Box>
  )
}

export default ImageSide