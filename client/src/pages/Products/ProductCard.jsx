import { Card,
         CardActions,
         CardMedia,
         Typography,
         IconButton} from "@mui/material";

import { styled } from "@mui/material/styles";

import { IoBagAddOutline } from "react-icons/io5";

import {Link as RouterLink} from "react-router-dom";

import Tooltip from '@mui/material/Tooltip';



// 🎨 Styled Card (reusable look)

const StyledCard = styled(Card)(({theme})=>({
    display: 'grid',
    gridTemplateColumns: 'auto',
    gridTemplateRows:' auto 1fr 1fr',
    maxWidth: 400,
    width:'100%',
    alignSelf:'center',
    minWidth:140,
    margin:'auto',
    height:'100%',
    
 
    
   
 
    transition: 'transform .25s ease, box-shadow .25s ease',

    '&:hover':{
        transfrom: 'translateY(-6px)',
        boxShadow: theme.shadows[6]
    }
}))

// 🎨 Image

const StyledMedia = styled(CardMedia)({
     cursor: 'pointer'

})

// 🎨 Bottom row


const BottomRow = styled(CardActions)({
    display: 'flex',
    justifyContent: 'space-between',
    paddingInline: 16,
    paddingBlock: 10

})

const ProductCard = ({product, addToBag}) => {
    
return (
    <StyledCard elevation={2} 
    component={RouterLink}
    to={`/product/${product.id}`}
    state={{ product }}

    sx={{textDecoration:'none',
    '&:hover':{
        textDecoration:'none'
    }}}>

        {/* IMAGE */}
        <StyledMedia component='img' image={product.image} alt={product.name} />

        {/* TTITLE */}
        <Typography paddingInline={'16px'} marginTop={'1em'} textAlign={'left'}>
         {product.name}
        </Typography>

        {/* BOTTOM ROW */}
        <BottomRow>
            <Typography variant='h4' >
            ${product.price.toFixed(2)}

            </Typography>

            <Tooltip title="Add to bag">
               <IconButton 
                onClick={(e) =>{ 
                    e.stopPropagation(),// Stops the bubble up
                    e.preventDefault(), // prevents link navigation
                    addToBag(product)}} 
                variant='contained' color='primary'  sx={{ width: 42, height: 42, minWidth: 42, justifySelf:'end'}} >
                   <IoBagAddOutline size={22}/>
                </IconButton>
            </Tooltip>

        </BottomRow>

    </StyledCard>

)
}


export default ProductCard