import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import { useShoppingBag } from '../../context/ShoppingBagContext';
import {Button, Typography, Box} from '@mui/material'
import {GridButtons} from '../../styles/styles'


const ProductInBag= () => {
const {shoppingBagList, removeItem, increaseQuantity, decreaseQuantity } = useShoppingBag()

return <>
{shoppingBagList.map((product) => 
     //Product item container                  
    <Box key={product.id} 
        sx={{
        display:'grid', 
        gridTemplateColumns:'1fr 2fr 1fr', 
       columnGap:'1em',
        marginTop:'2em'

        }}
    >
        {/* product image */}
        <Box component='img' sx={{width: '100%'}} src={product.image} alt={product.name} />
        {/* Product details container */}
        <Box sx={{display:'flex', flexDirection:'column', rowGap:'0.5em', justifyContent: 'start', textAlign:'left'}}>
            <Typography variant='h4'>{product.name}</Typography>
            <Typography sx={{fontSize: '0.8rem'}}>{product.category ? product.category.toUpperCase() : 'No Category'}</Typography> {/* Handle undefined category */}
            <Typography>${product.price.toFixed(2)}  /u</Typography> 
            
            <Box sx={{...GridButtons()}} >
                <Button variant='contained' color='secondary' id="btn-plus" onClick={() => increaseQuantity(product)}> + </Button>
                <Typography textAlign='center' >{product.quantity}</Typography>
                <Button variant='contained' color='secondary' id="btn-less" onClick={() => decreaseQuantity(product)}> - </Button>
            </Box>
        </Box>


        <Box sx={{display:'flex', flexDirection:'column', alignItems:'end' }}> 
            <Typography variant='h4'> ${(product.price * product.quantity).toFixed(2)}</Typography>
            <Tooltip title="Delete">
            
                <DeleteIcon  color='primary' sx={{marginTop:'1em', cursor:'pointer'}} onClick={() => removeItem(product)}/>
            
            </Tooltip>
        </Box>
    </Box>
)}
</>
}


export default ProductInBag