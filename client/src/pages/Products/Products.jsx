//import conect to server
import axios from 'axios';

import { useState, useEffect } from 'react';
// navigation 
import { useNavigate } from 'react-router-dom';

// port
import {URL} from 'src/config';

// providers
import { useShoppingBag } from '../../context/ShoppingBagContext';
import { useFilters } from '../../context/FiltersContext';


import Filters from './Filters';

import BasicMenu from './BasicMenu'
import MenuItem from '@mui/material/MenuItem';
import { Button, IconButton } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { alpha } from '@mui/material';

import { useSearchParams } from 'react-router';
import { fontSize } from '@mui/system';

import ProductCard from './ProductCard';

import FiltersDrawer from './FiltersDrawer'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import {LAYOUT_MARGIN_TOP} from '../../utils/spacing'



const Products = () => {

        let navigate = useNavigate();
        const  {addToBag} = useShoppingBag()
        const {filters, setFilters} = useFilters()
        const [params] = useSearchParams()
        const search = params.get('q')?.toLowerCase() || ''
     

        // STATE HOOKS
        const [products, setProducts] = useState([])
        const [category, setCategory] = useState('');
        const [sortBy, setSortBy] = useState('')
        const [openDrawer, setOpenDrawer] = useState(false);
      
       
        
        let getProducts = () => {
            //send get request to the server
            axios.get (`${URL}/api/product`)
            .then((res) => {  
                
                setProducts(res.data.data)
            
            })
            .catch((err) => {
                console.error('❌ Failed to load products:', err.message);

            })
        }
        useEffect(() => {
            getProducts();
        }, []);  
     
        // Match search
        const matchSearch = ( search, product) =>{

            // when search is falsy exit this function
            if (!search) return true
    
            return(
                product.name.toLowerCase().includes(search) ||
                product.category.toLowerCase().includes(search) ||
                product.productType.toLowerCase().includes(search) ||
                product.description.toLowerCase().includes(search)
            )
          }

      const selectedCategories = filters.category.map(category => category.toLowerCase())
      const selectedProductType = filters.productType.map(item => item.toLowerCase())

      //Filters conditions
      const filteredProducts = products.filter ((product) => {

        if(!matchSearch(search,product)) return false

        if(selectedCategories.length > 0 && !selectedCategories.includes(product.category.toLowerCase())){
            return false
        }

        if(selectedProductType.length > 0 && !selectedProductType.includes(product.productType.toLowerCase())){
            return false
        }
        
       if(product.price < filters.minPrice || product.price > filters.maxPrice ){
            return false
        }

        return true
    
      })



    const sortedProducts = [...filteredProducts].sort((a,b) => {
        //if sort features is falsy like empty value it will return 0, so no change

        if(!sortBy) return 0

        if(sortBy === 'price-asc') return a.price - b.price

        if(sortBy === 'price-des') return b.price - a.price

        if(sortBy === 'order-A-Z') return a.name.localeCompare(b.name)
        
        if(sortBy === 'order-Z-A') return b.name.localeCompare(a.name)

        return 0

    })


        let renderProducts = () => (
            sortedProducts.map((product) => 
            <ProductCard
            key={product.id}
            product={product}
            addToBag={addToBag}


            />
            )
        );


    return (
        <Box sx={{marginInline:{
            xs:'10px',
            md:'40px'
        }}}>
        
            <Box sx={{...LAYOUT_MARGIN_TOP, display:'flex', justifyContent:{
                xs:'space-between',
                md:'flex-end'} 

            }} > 

            {/* filters icon  */}
            <Box 
                title='Filters' 
                sx={{display:{
                    xs:'block',
                    md:'none'
            }}}> 
                <Button onClick={() => {setOpenDrawer(true)}}>
                    <TuneOutlinedIcon sx={{alignText:'left'}}/>
                </Button>
                <FiltersDrawer 
                    open={openDrawer}
                    onClose={() => setOpenDrawer(false)}
                    filters={filters}
                    setFilters={setFilters}
                    />
                    
            </Box>


            {/* features menu */}
                <BasicMenu  title={'Features'}>
                    <MenuItem onClick={() => setSortBy('price-asc')}>Price: Low to High</MenuItem>
                    <MenuItem onClick={() => setSortBy('price-des')} >Price: High to Low</MenuItem>
                    <MenuItem onClick={() => setSortBy('order-A-Z')}>Name: A to Z</MenuItem>
                    <MenuItem onClick={() => setSortBy('order-Z-A')}>Name: Z to A</MenuItem>

                </BasicMenu>

        
            </Box>

        
            <Box sx={{ display:'flex', marginTop:'1em', justifyContent:'space-between', columnGap:'1em'}} >
                {/* filters section */}
                <Box 
                variant='asaide'
                sx={(theme) => ({ 
                    backgroundColor: alpha(theme.palette.background.paper, 0.8),
                    padding: '0.8rem',
                    borderRadius: '1%',
                    width:'20%',
                    display:{
                        xs:'none',
                        sm:'none',
                        md:'block'
                    }
                     })}
                >
                    <Typography variant='h4' color='text.primary' padding={'0.5em'} textAlign={'left'}>Filters</Typography>
                    <Filters filters={filters} setFilters={setFilters}/>
                </Box>

                {/* cards section */}
                <Box 
                sx={{
                    flex:1, 
                    display:'grid', 
                    gap:{
                        xs:1.5,
                        
                        md:3

                    }, 
                    
                    gridTemplateColumns:{
                        xs: 'repeat(2, 1fr)',
                        sm: 'repeat(3, 1fr)',
                        md: 'repeat(3, 1fr)',
                        lg: 'repeat(4, 1fr)',
                    }
                }} >
                    {filteredProducts.length === 0 ? 
                    <Typography variant='h2' color='text.primary' sx={{gridColumn:'1/4', paddingTop:'2em'}}>No products found</Typography> 
                    : renderProducts()}
                    
                </Box>

            </Box>
        
        </Box>
    );
    
}

export default Products