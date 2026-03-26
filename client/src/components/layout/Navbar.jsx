import React from "react";
import { NavLink } from "react-router";
import '../../styles/NavBar.css'; 
import { useState } from "react";
import { Box } from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import NavItem from "../navigation/NavItem";
import { SubNavContainer } from "../../styles/styles";
import DrawerNav from "../navigation/DrawerNav";


const Navbar = () => {
 
const [showNav, setShowNav] = useState(false)
const [openDrawer, setOpenDrawer] = useState(false)

const toggleMenu = () => {
  setShowNav(!showNav)
  
}

return(
<Box> 

  {/* Nav main container - desktop */}
  <Box sx={{
        display:{xs:'none', md:'grid'},
        gridTemplateColumns: '35% auto 35%',
        justifyContent: 'center',
        columnGap: '3em',
        position: 'fixed',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        top: '13%',
        zIndex: 1000
  }}>

    {/* First half nav container */}
    <Box sx={{...SubNavContainer()}}>
        
      <NavItem to={'/product'}>Products</NavItem>
      <NavItem to={'/about'}>About us</NavItem>

    </Box>
    
    {/* Logo */}
    <NavLink to={"/"}>
      <Box component='img' sx={{width:'250px', display:{xs:'none', md:'block'}}}  src="/img/logo.svg" alt="Logo Beach Shack"/>
    </NavLink>

    {/* Second half nav container */}
    <Box sx={{...SubNavContainer()}}>
      <NavItem to={'/purpose'}>Our mission</NavItem>
      <NavItem to={'/contact'}>Contact</NavItem>
    
    </Box>

  </Box>

    {/* Responsive nav */}
    <Box display={{xs:'block', md:'none'}}>

       {/* Logo */}
      <NavLink to={"/"}>
        <Box component='img' sx={{    
          width: '200px',
          zIndex: 1000,
          position: 'absolute',
          top:'13%',
          left: '50%',
          transform: 'translate(-50%)'
          }} 
        src="/img/logo.svg" 
        alt="Logo Beach Shack"/>
      </NavLink>

      <DrawerNav 
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
      />


      <MenuRoundedIcon onClick={() => setOpenDrawer(true)} sx={{position:'fixed',  top: 20, left: 20, zIndex: 1000}}/>
    </Box>
    



</Box>
)}


export default Navbar;





