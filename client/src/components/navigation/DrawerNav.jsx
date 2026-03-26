import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Typography } from '@mui/material';
import NavItem from './NavItem';
import CloseIcon from '@mui/icons-material/Close';


const DrawerNav = ({open, onClose}) =>{
    return(

        <Box>
            <Drawer
                anchor='left'
                open={open}
                onClose={onClose}
                PaperProps={{sx: {width:'80%', display:'flex', }}}

            
                >
                <CloseIcon onClick={onClose} sx={{alignSelf:'flex-end',  m:'10px'}}/>
                
                <Box sx={{p:'0 2em 2em 2em', display:'flex', flexDirection:'column', gap:'1em'}}>
                    <NavItem to={'/'}>Home</NavItem>
                    <NavItem to={'/product'}>Products</NavItem>
                    <NavItem to={'/about'}>About us</NavItem>
                    <NavItem to={'/purpose'}>Our mission</NavItem>
                    <NavItem to={'/contact'}>Contact</NavItem>

                </Box>
            
     
            </Drawer>
        </Box>
    )
}

export default DrawerNav