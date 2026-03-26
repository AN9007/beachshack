import React, { createContext, useState, useContext } from 'react';

const ShoppingBagContext = createContext();

export const ShoppingBagProvider = ({ children }) => {
    const [shoppingBagList, setShoppingBagList] = useState([]); 


    const addToBag = (product) => {
        setShoppingBagList((prevProducts) => {
            let match = prevProducts.find((item) => item.name === product.name );
            if (match){
                
                return prevProducts.map(item =>  item.name === product.name ? {...item, quantity: item.quantity + 1} : item)
            } else {
                
                return [...prevProducts, {...product, quantity: 1}]

            } 
        })
    }

    const addToBagFromProductPage = (product) => {
        setShoppingBagList((prevProducts) => {
            let match = prevProducts.find((item) => item.name === product.name );
            if (match){
              
                return prevProducts.map(item =>  item.name === product.name ? {...item, quantity: item.quantity + product.quantity} : item)
            } else {
          
                return [...prevProducts, {...product, quantity: product.quantity}]

            } 
        })
    } 

    const removeItem = (product) => {
        setShoppingBagList((prevProducts) => 
            prevProducts.filter(item => item.id !== product.id)
        )
    }

    const increaseQuantity = (product) => {
        setShoppingBagList((prevProducts) => {
            let matchID = prevProducts.find((item) => item.id === product.id);
            if (matchID){
                if (matchID.quantity + 1 > matchID.stock) {
                    alert("Sorry, not enough stock!")
                    return prevProducts.quantity
                }
            
                return prevProducts.map(item =>  item.id === product.id ? {...item, quantity: item.quantity + 1} : item)
                
            }    
            return prevProducts           
      })
    }
    
      const decreaseQuantity = (product) => {
        setShoppingBagList((prevProducts) => {
            let matchID = prevProducts.find((item) => item.id === product.id);
        
        if(matchID && matchID.quantity > 1){
           return prevProducts.map(item =>  item.id === product.id ? {...item, quantity: item.quantity - 1} : item)

        } else if(matchID.quantity <= 1){
            prevProducts.filter(item => item.id !== product.id )
        }
        return prevProducts
    
      })
    }



    return (
        <ShoppingBagContext.Provider value={{ shoppingBagList, addToBag, removeItem, increaseQuantity, decreaseQuantity, addToBagFromProductPage }}>
          {children}
        </ShoppingBagContext.Provider>
      );
}

export const useShoppingBag = () => {
    return useContext(ShoppingBagContext);
  };