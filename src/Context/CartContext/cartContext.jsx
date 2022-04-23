import axios from 'axios'
import React from 'react'
import { createContext, useContext } from 'react'
import { useState, useEffect } from 'react'
import { useAuth } from "../AuthContext/Auth/AuthContext"

const cartContext = createContext(null);
const useCart = () => useContext(cartContext);

function CartProvider({ children }) {
    const authtoken = localStorage.getItem("AuthToken")  
    const [cartData , setcartData ] =  useState([]);
    const { isAuth}  = useAuth();

        useEffect(() => {
            if(isAuth) {
                ( async function getCartData () {
                    try {
                        const res = await axios.get('/api/user/cart' , {
                                headers : {
                                    authorization : authtoken
                                }
                            })
                        setcartData(res.data.cart)    
                    } catch (error) {
                        console.error(error , "err in getcartData")
                    }
                })()
            } else {
                setcartData([])
            }
           
    }, [isAuth]);

    const itemExistInCart = (product)=>{
        let productItem = false
        cartData.map((item)=>{
            if (item._id === product._id){
                return productItem = true
            }
            else{
                return productItem
            }
        })
        return productItem
    }  
    async function addToCart (product) {

        try {
            const itemInCart = itemExistInCart(product)

            if (itemInCart){

                const res = await axios.post(`/api/user/cart/${product._id}` , {
                    action: {
                      type: "increment"
                    }
                  }, {
                    headers: {
                        authorization : authtoken
                    }})
                    setcartData(res.data.cart)    

            }else{
                const res = await axios.post('/api/user/cart' , { product } , {
                    headers: {
                        authorization : authtoken
                    }})
                    setcartData(res.data.cart)

            }
            
        } catch (error) {
            console.error(error , "err in addToCart-context");
        }
    }

    async function removeFromCart (product) {
        try {
            const res = await axios.delete(`/api/user/cart/${product._id}` , {
                headers: {
                    authorization : authtoken
                }})
                setcartData(res.data.cart)
        } catch (error) {
            console.error(error , "err in increaseQuantity-context");
        }
    }

    async function getQuantity (id) {
        try {
            const res = await axios.post(`/api/user/cart/${id}` , {
                action: {
                  type: "increment"
                }
              }, {
                headers: {
                    authorization : authtoken
                }})
                setcartData(res.data.cart)
        } catch (error) {
            console.error(error , "err in removefromcart-context");
        }
    }

    async function decrementQuantity (id) {
        try {
            const res = await axios.post(`/api/user/cart/${id}` , {
                action: {
                  type: "decrement"
                }
              }, {
                headers: {
                    authorization : authtoken
                }})
                setcartData(res.data.cart)
        } catch (error) {
            console.error(error , "err in removefromcart-context");
        }
    } 
    
    const priceDetailsCalc = (obj , curritem) => ({ ...obj , 
        totalOriginalPrice: Number(curritem.price)*Number(curritem.qty) + obj.totalOriginalPrice ,
        totalDiscoutPrice : Number(curritem.discountedPrice)*Number(curritem.qty) + obj.totalDiscoutPrice ,
      })
    const reducedData = cartData.reduce(priceDetailsCalc , { totalOriginalPrice : 0 , totalDiscoutPrice : 0 })
    async function getQuantity (id) {
        try {
            const res = await axios.post(`/api/user/cart/${id}` , {
                action: {
                  type: "increment"
                }
              }, {
                headers: {
                    authorization : authtoken
                }})
                setcartData(res.data.cart)
        } catch (error) {
            console.error(error , "err in removefromcart-context");
        }
    }
    return ( 
        <cartContext.Provider value ={{ cartData , addToCart ,removeFromCart,reducedData, getQuantity, decrementQuantity }}>
            { children }
        </cartContext.Provider>
);
}
export  { CartProvider , useCart };