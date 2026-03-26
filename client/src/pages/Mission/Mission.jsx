import { Typography, Box } from '@mui/material'
import 'src/styles/purpose.css'
import WaveBottom from '../../components/shared/WaveBottom'
import {RoundedContainer, HeroPurpose, Hero, ImageTextSection, ImageStyle, TextBoxStyle} from '../../styles/styles'

const Purpose = () =>{

    return <>
    
        <Box sx={{...Hero(), ...HeroPurpose()}}> 

            <Typography variant='h1' textAlign={'left'}>Our Mission and values</Typography>
            <Typography variant= 'h2' width={{xs:'100%', md:'60%'}} textAlign={'left'}>Eco-Friendly, Vegan and Cruelty-Free, Sustainable Ingredients</Typography>
    
        </Box>
        

        <WaveBottom/>

        {/* text in buble */}
        <Box sx={{...RoundedContainer(), bgcolor: 'background.paper'}}>
            <Typography> We prioritize the planet with every product we make. All our items are made with <strong>environmentally friendly </strong>packaging, <strong> recyclable materials</strong>, and <strong>sustainable ingredients </strong>to reduce waste and protect our oceans.</Typography>
            
            <Typography>We are committed to creating products that are 100% vegan and cruelty-free. Our formulations are never tested on animals, and we use plant-based ingredients that are kind to both you and the planet.</Typography>

        </Box>

        {/* Section image + text */}
        <Box sx={{...ImageTextSection()}}>

            <Box component='img' src="/img/coral.png" alt="coral"   
            sx={{...ImageStyle()
            }}/>

        
        
            <Box  sx={{...TextBoxStyle()}}>
                <Typography variant='h2' sx={{paddingBlock:'1em'}}>Why Choose Beach Shack?</Typography>
                <Typography><strong>We Care About Quality:</strong>  Each product is made with care and attention to detail. We ensure the highest quality standards, offering products that work naturally and effectively.</Typography>
                <Typography><strong>We Care About Your Skin:</strong>  Our products are free from harsh chemicals and synthetics. We use only the purest ingredients to create safe, effective formulas for all skin types.</Typography> 
                <Typography><strong>We Care About Our Oceans: </strong> Our commitment to sustainability means we are continuously working to reduce our environmental footprint. From biodegradable packaging to supporting ocean conservation efforts, we’re doing our part to protect the planet.</Typography>
            
            </Box>
        
        </Box>

        <Box sx={(theme) => ({backgroundColor: theme.palette.custom.green, paddingBlock:'14em', position:'relative', marginBlock:'3em'})}>
            {/* wave */}
            <Box className="custom-shape-divider-top-1740594060">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </Box>

            {/* Text container */}
            <Box m='auto' width={{xs:'90%', md:'60%'}} >
                <Typography  color='secondary' variant='h2' >
                    Join the Beach Shack Movement
                </Typography>
                <Typography sx={{paddingBlock:'1em'}} color='secondary'>
                    When you choose Beach Shack, you're not just choosing a product, 
                    you're supporting a lifestyle that celebrates conscious living and sustainability. Together, we can make a 
                    positive impact on the environment while enjoying the beauty and freedom that the beach offers.
                </Typography>
            </Box>

            <Typography  m='auto' width={'90%'} color='secondary' variant='h3' sx={{textAlign:'center', paddingTop:'1em'}} >
                Let's Care for the Planet and Your Skin.
            </Typography>

            {/* wave */}
            <Box className="custom-shape-divider-bottom-1740595010">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </Box>

        </Box>

    </>
    
}

export default Purpose