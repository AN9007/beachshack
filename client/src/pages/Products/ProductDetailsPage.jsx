import { useParams } from "react-router";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';
import {Button, Typography, Box} from "@mui/material"
import {LAYOUT_MARGIN_TOP} from '../../utils/spacing'
import { useShoppingBag } from '../../context/ShoppingBagContext';
import { GridButtons } from "../../styles/styles";


const ProductDetails = () => {

    let navigate = useNavigate();
    const  {addToBagFromProductPage} = useShoppingBag()
    const location = useLocation();
    let {id} = useParams()

    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1)
    
    const { product: productFromState} = location.state || {}

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity  + 1)
    }

    const handleDecrease = () => {
        
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity  - 1 : 1 ))
    
    }
    const handleAddtoBag = () =>{
        const updateProduct = {...product, quantity}
        addToBagFromProductPage(updateProduct)
    }
    
    useEffect(() => {

        const fetchProduct = async () => {
            try{
                const response = await axios.get(`/product/${id}`);
               
                if(response.data.ok) {
                    setProduct(response.data.data);
                } else {
                    console.error('❌ Product not found');
                }
            } catch(err){
                console.error('❌ Error fetching product: ', err.message);
            }
        } 
        if(!productFromState) {
            fetchProduct();
         } else{
             setProduct(productFromState);

            }
    }, [id, productFromState]);
  


    

    if (product === null) { return <Box>Loading...</Box>;}
    if (product === false) {return <Box>Product not found</Box>}
    
   
    return(
        <Box sx={{ 
            ...LAYOUT_MARGIN_TOP, 
            display: 'flex',
            flexDirection:{xs:'column', md:'row'},
            marginRight: 'auto',
            marginLeft: 'auto',
            width: '90%',
            justifyContent: 'center',
            columnGap: '4em',
            }}
        >
            <img src={`/${product.image}`} alt={product.name} />
            
            <Box textAlign={'left'} mt={'2em'} width={{xs:'100%', md:'40%'}} >
                <Typography variant='h3' >{product.name}</Typography>
                <Typography sx={{paddingTop:'1em'}}>{product.category}</Typography>
                <Typography sx={{paddingBlock:'1.5em'}}>{product.description}</Typography>
                <Typography sx={{paddingBottom:'0.7em'}} variant= 'h3' >${product.price}</Typography>
                
                <Box sx={{  
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flexWrap: 'nowrap'}}
                >
                    <Box sx={{...GridButtons()}}>
                        <Button size='small' variant='contained' color='secondary' id="btn-plus" onClick={() => handleIncrease(product)}> + </Button>
                        <Typography textAlign={'center'}>{quantity}</Typography>
                        <Button variant='contained' color='secondary'  id="btn-less" onClick={() => handleDecrease(product)}> - </Button>
                    </Box> 
                    
                    <Button variant='contained' onClick={handleAddtoBag}>Add to bag</Button>
                
                </Box>
            </Box>
      </Box>

    )


}
export default ProductDetails