
import { useNavigate, NavLink } from "react-router";
import React from "react";
import {Button, TextField, Box, Typography, Link, Stack} from '@mui/material';
import Grid from '@mui/material/Grid2'
//social media icons
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';




const Footer = () =>{
  let navigate = useNavigate();

  //inside the function always return something
  return (
  <Box component='footer' sx={{mt:'150px', p:'50px', bgcolor:'custom.seashell', display:'flex', flexDirection:'column'}}  >
  
    <Box >
      <Typography sx={{paddingBottom:'20px'}} variant='h3'>Stay up to date on the latest news</Typography>
      <Box component='form' sx={{ textAlign: 'left' }} action="">

        <Typography component='label' htmlFor="">Email</Typography>

        <Box display={'flex'} columnGap={'1em'} width={'auto'} >
          <TextField type='email' autoComplete={'email'} required='true' placeholder='Your email' name='email' 
          sx={{
            width: '30%',
            backgroundColor: 'rgb(255, 255, 255)',
            borderRadius: '5px',
            fontSize: '1em',

          }}/>
          <Button type='submit' variant="contained" >Submit</Button>
        </Box>
        
      </Box>


    </Box>
    
    <Box  sx={{
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(4, 1fr)'
    },
    gap: 4,
    width: '100%',
    paddingBlock:'30px',
    textAlign:'left'

  }}>
    
        <Box >
          <Typography variant='h4'>About</Typography>
          <Stack>
            <Link 
            component={NavLink}  
              to={"/product"}>
                Products
            </Link>
            <Link component={NavLink}  
                to={"/about"}>
                  About us
            </Link>
            <Link component={NavLink} 
              to={"/purpose"}>
                Our mission
            </Link>

            <Link href='#'>
                Blog
            </Link>
          </Stack>
        </Box>

        <Box >
          <Typography variant='h4' >Support</Typography>

          <Stack>
            <Link component={NavLink}  
            to={"/contact"}>
            Contact us
            </Link>
            <Link href='#'>
                Shipping
            </Link>
            <Link href='#'>
              Refunds and returns policy
            </Link>

            <Link href='#'>
              Subscription policy
            </Link>

          </Stack>
        </Box>

  

        <Box>
          <Typography variant='h4' >Legal</Typography>
          <Stack >
            <Link href='#'>
              Terms and conditions
            </Link>
            <Link href='#'>Privacy policy</Link>
            <Link href='#'>Manage cookies</Link>
            <Link href='#'>Reviews policy</Link>
          </Stack>

        </Box>

        <Box>

          <Typography variant='h4' pb='0.4em'>Social</Typography>
          <Stack direction='row' gap={1} >
            <Link href="#">
              <InstagramIcon/>
            </Link>
            <Link href="#">
              <FacebookRoundedIcon/>
            </Link>
            <Link href="#">
              <YouTubeIcon/>
            </Link>
          </Stack>
          
        </Box>

      

    </Box>

<Grid container sx={{justifyContent:'space-between'}}>
  <NavLink  to={"/"}>
    <Box compponent='img' width={'100%'} maxWidth={'170px'}  src="/img/logo.svg" alt="logo footer" />
  </NavLink>
  <Typography sx={{marginBlock:'10px'}}>&copy; 2025 BeachShack. All rights reserved.</Typography>

</Grid>


</Box>

)
   
}

// we export the App function to be imported in the main.jsx
export default Footer


const styles ={

  active: {
    color: "#F19C79"
  },

  default: {
    textDecoration: "none",
    
  }
}