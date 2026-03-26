import React from "react";
import { NavLink } from "react-router";


const NavItem= ({to, children}) => {
    return(
        <NavLink 
        
        style = {({isActive}) => ({
          color: isActive ?  'primary.dark' : 'text.primary', 
          fontWeight: 500,
          textDecoration: isActive ? 'underline' : 'none'
          })}
        to={to}
        >
            {children}
          </NavLink>
    )
};

export default NavItem