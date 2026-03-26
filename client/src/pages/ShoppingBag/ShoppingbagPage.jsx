import React from "react";
import axios from "axios";

import { useEffect, useState } from 'react'
import { URL } from "../../config.js";
import { useShoppingBag } from '../../context/ShoppingBagContext';
import ProductInBag from './ProductInBag'

import { useNavigate } from "react-router";
import {LAYOUT_MARGIN_TOP} from '../../utils/spacing'

import { useStripe } from "@stripe/react-stripe-js";
import { Button, Typography, Card, Box } from "@mui/material";

const Shoppingbag = (props) =>{

    const {shoppingBagList, removeItem, increaseQuantity, decreaseQuantity } = useShoppingBag()
    const [finalAmount, setFinalAmount] = useState(0)

    const navigate = useNavigate();
    const stripe = useStripe();

    useEffect (() => {

        let total = 0;
        shoppingBagList.forEach((product) => {
          total += (product.quantity * product.price)
        })
     
        setFinalAmount(total)
      
      
      },[shoppingBagList])


  // 1. When we click 'Continue with payment' button this function triggers first
  const createCheckoutSession = async () => {
    try {

      
      // 2. Sending request to the create_checkout_session controller and passing products to be paid for
      const response = await axios.post(
        `${URL}/payment/create-checkout-session`,
        { products: shoppingBagList, },
       
      );

      return response.data.ok
        ? // we save session id in localStorage to get it later
          (localStorage.setItem(
            "sessionId",
            JSON.stringify(response.data.sessionId)
          ),
          // 9. If server returned ok after making a session we run redirect() and pass id of the session to the actual checkout / payment form
          redirect(response.data.sessionId))
        : navigate("/payment/error");
    } catch (error) {
      console.error("Error occurred during checkout session creation:", error);
      navigate("/payment/error");
    }
  };

  const redirect = (sessionId) => {
   
    // 10. This redirects to checkout.stripe.com and if charge/payment was successful send user to success url defined in create_checkout_session in the controller (which in our case renders payment_success.js)
    stripe
      .redirectToCheckout({
        // Make the id field from the Checkout Session creation API response
        // available to this file, so you can provide it as parameter here
        // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
        sessionId: sessionId,
      })
      .then(function (result) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
      });
  };
  
  let renderBagContent = () => {
    if (shoppingBagList.length === 0 ){
      return (
        // Empty bag content
        <Box >
          <Typography variant='h2' pb={4}>Your Shopping Bag is Empty!</Typography>
          <Box component='img' src="img/empty-bag.png" alt="bag" sx={{width:{
            xs:'90%',
            md:'60%',
            lg:'50%'
          }}}/>
        </Box>
      )
    } else{
       return <>
       {/* Left side - Content products list*/}
        <Box sx={{width:{ xs:'100%', md:'60%'}, order:{xs:2, md:1}}} >    
          
          <Typography variant='h2' textAlign='left' >Your shopping bag</Typography>    

          <ProductInBag/> 

        </Box>

      {/* Right side - Order Summary */}
        <Box sx={{width:{ xs:'100%', md:'40%'}, order:{xs:1, md:2}, mb:'3em'}}>

          <Card sx={{p:5}}>
            <Typography variant='h3' sx={{paddingBottom:'1em'}}>Order summary</Typography>
       
            <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}} >
              <Typography>Products</Typography>
              <Typography>$ {finalAmount.toFixed(2)}</Typography>
            </Box>

            <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
              <Typography vairant='h3' >Subtotal</Typography>
              <Typography variant='h3' >$ {finalAmount.toFixed(2)}</Typography>
            </Box>

            <Button variant='contained' style={{marginTop: '2em'} } onClick={() => createCheckoutSession()}>
              Continue with payment
            </Button>

          </Card>

        </Box>
                
         </>   
        }
    }

    return (
      // All page content
        <Box sx={{...LAYOUT_MARGIN_TOP,
          display: 'flex',
          flexDirection:{
            xs:'column',
            md:'row'
          },
         
          justifyContent: 'space-around',
          width: '90%',
          marginInline: 'auto',
          columnGap: '6em',
        }}>
            {renderBagContent()}
        </Box>
    )
    
}

export default Shoppingbag