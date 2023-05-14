import { Adb, HelpOutline, KeyboardArrowDown } from '@mui/icons-material';
import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import React from 'react'

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
  return (
    <AppBar 
    position="static"
    sx={{backgroundColor:"#fff"}}
    >
        <Container 
        maxWidth="xl" 
        sx={{
            display:"inline-flex", 
            width:"100%" , 
            justifyContent:"space-between", 
            alignItems:"center"
            }}
        >
            
                <Box 
                display={"inline-flex"} 
                p={"30px 0"} 
                alignItems={"center"}
                >
                    <Adb 
                    sx={{
                        color: "#0d144d", 
                        fontSize:"40px"}} 
                    />

                    <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: 'flex' ,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: "#0d144d",
                        textDecoration: 'none',
                    }}
                    >
                    LOGO
                    </Typography>
                </Box>

                <Box sx={{ 
                        flexGrow: 0 , 
                        display: "inline-flex", 
                        flexDirection:"row", 
                        alignItems:"center"}}>
                    <Button 
                        variant="outlined" 
                        sx={{marginRight:"30px", 
                            color:"#0d144d", 
                            fontWeight:"600", 
                            display:"inline-flex", 
                            alignItems:"center"}}
                        startIcon={<HelpOutline />}   
                    >
                        Centro de Ayuda
                    </Button>
                    <Avatar 
                        sx={{width:"50px", height:"50px"}} 
                        alt="Remy Sharp" 
                        src="https://imgv3.fotor.com/images/gallery/realistic-purple-hair-woman-avatar.jpg" 
                    />

                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <KeyboardArrowDown/>
                        </IconButton>
                    </Tooltip>
                    <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                        ))}
                    </Menu>
                </Box>
            
        </Container>
    </AppBar>
  )
}

export default Navbar