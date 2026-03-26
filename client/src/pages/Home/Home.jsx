//import the app css
import 'src/styles/mainHome.css';
import {v4 as uuid} from 'uuid';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import values from 'src/data/DataValues';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {URL} from 'src/config';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Typography, Box, Card } from '@mui/material';
import { Hero, HeroHome } from '../../styles/styles';
import WaveBottom from '../../components/shared/WaveBottom'


const MainHome = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const [products, setProducts] = useState([])

  useEffect(() => {
      getProducts();
  }, []);  
  
  const getProducts = async() =>{
    try{
      const res = await axios.get (`${URL}/api/home`);
      setProducts(res.data.data);
    } catch(err) {
      console.error('❌ Failed to load products:', err.message);
    }
  }
      

  const valueWithId = values.map((item) =>{
  return {id: uuid(), image:item.image, title: item.title, description: item.description }
  }) 

  // Render values company cards
  const displayValues = () =>{
    return valueWithId.map((item) => {
      return (
      <Card sx={{display:'grid', gridTemplateRows:'5em 13em', rowGap:'1em', borderRadius:'7px', justifyContent:'center', padding:'2em', marginInline:'auto', minHeight:'20em', alignItems:'start'}}  key={item.id}>
        <Box component='img' m='auto' maxHeight='80px' maxWidth='100px' src={item.image} alt={item.title}/>
        <Box >
            <Typography variant='h3' textAlign={'center'} mb={'0.5em'}>{item.title}</Typography>
            <Typography>{item.description}</Typography>
          </Box>
        </Card>
        )
    })
  }

// Render popular products
  const popularProducts = products.filter(product => product.isPopular)

  const renderPopularProducts = () =>(
    popularProducts.map((product) => {
        return(
          <Box key={product.id} 
          sx={{
            maxWidth:'380px', 
            position:'relative',
            
            '&:hover .image':{
              opacity:0.3
            },
            
            '&:hover .overlay':{
              opacity:1
            }}}>

          {/* image */}
          <Box className='image' component='img' src={product.image} alt={product.name}  
          sx={{
            maxWidth:'380px',
            opacity:1, 
            display: 'block', 
            height:'auto', 
            transition:'0.5s ease', 
            backfaceVisibility:'hidden'
          }} 
          />

          <Box className='overlay' sx={{
            transition:'0.5s ease',
            opacity:0,
            position:'absolute',
            top:'50%',
            left:'50%',
            transform:'translate(-50%, -50%)',
            textAlign:'center'
            
          }} >
            <Button variant='contained' onClick={() => navigate(`/product/${product.id}`, { state: { product } })}>See More</Button>
          </Box>
         
          <Typography mt={'0.8em'}>{product.name}</Typography>
        </Box>

        )
      }
    ))



  return <>

  {/* Hero section */}
  <Box sx={{... Hero(), ...HeroHome()}}> 
    <Typography variant='h1'>
      Care for Your Body, Care for the Planet
    </Typography>
    
    <Button variant='contained' onClick = {() => navigate('/product')} sx={{marginTop:'2em'}}>
      View Products
    </Button>

  </Box>

  {/* Wave */}
  <WaveBottom/>

  {/* Values company cards */}
  <Box mt={'5em'} mr={'50px'} ml={'50px'}>

    <Typography variant='h2' mb={'1em'}>
      Our Mission and Values
    </Typography>

    <Box sx={{
      display:'grid',
      gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))',
      gap:'20px',
      rowGap:'40px',
      columnGap:'1em',
      justifyContent:'space-between'
    }}>
      {displayValues()}
    </Box>
  </Box>

{/* Popular products horizontal scrolling section */}
  <Box mt='7em'>

    <Typography variant='h2' mb={'1em'}>
      Popular Products
    </Typography>
  
    <Box sx={{display:'flex',
      overflowX:'auto',
      position:'relative'}}
    >
      {renderPopularProducts()}
    </Box>

  </Box>

  </>
    
}

// we export the App function to be imported in the main.jsx
export default MainHome