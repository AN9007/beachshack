import { Typography, Box } from '@mui/material'
import {Hero, HeroAbout, ImageStyle, ImageTextSection, RoundedContainer, TextBoxStyle} from '../../styles/styles'
import WaveBottom from '../../components/shared/WaveBottom'

const About = () =>{

    return <>
 
      <Box sx={{...Hero(), ...HeroAbout()}}> 
        <Typography variant='h1'textAlign={'left'}>Welcome to Beach Shack</Typography>
        <Typography variant='h2' textAlign={'left'}>Where Sustainability Meets Self-Care</Typography>
      </Box>

      <WaveBottom/>
      
      <Box sx={{...RoundedContainer(), bgcolor: 'background.paper',}}>
      
        <Typography>At Beach Shack, we believe that taking care of your body and the planet go hand in hand. </Typography>
        <Typography>We provide eco-friendly, vegan, and high-quality hygiene products. </Typography>
        <Typography>Our products are designed to enhance your natural beauty while protecting the environment.</Typography>
      </Box>

      <Box sx={{...ImageTextSection()}}>

        {/* image */}
        <Box component='img' src="/img/store-products.png" alt="products on the shelf" sx={{...ImageStyle(), mb:'1em'}}/>
        
        {/* text */}
        <Box sx={{...TextBoxStyle()}}>
          <Typography variant='h2' pb={'1em'} >Our Story</Typography>
          <Typography>Born out of a love for the beach and a commitment to sustainability, Beach Shack was created to bridge the 
            gap between personal care and environmental responsibility. Our founder, Andrea, a passionate advocate 
            for clean living and ocean conservation, set out to create a brand that reflects a conscious lifestyle — one that 
            aligns with the values of those who love the beach and care about the world around them.
          </Typography>
        </Box>
      </Box>
    </>
    
}

export default About

