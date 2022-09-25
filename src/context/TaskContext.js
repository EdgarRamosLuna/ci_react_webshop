import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
  } from "react-router-dom";
import { createContext } from "react";

export const ShopContext = createContext();


export const TaskContextProvider = (props) => {
  const x = 20;
  const d = 26;
  let dataCart = localStorage.getItem('cant');
  dataCart = JSON.parse(dataCart);
  dataCart = parseInt(dataCart);
  if(isNaN(dataCart)){
    dataCart = 0;
    
  }
  const [cartItem, setCartItem] = useState(dataCart);
  const [tokn, setTokn] = useState();
  let tokenString = localStorage.getItem('_');
  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if(tokenString){
        tokenString = JSON.parse(tokenString);
        tokenString = parseInt(tokenString);
        setTokn(tokenString);
        setShowLogin(false);
    }
    
  }, [])
  const getToken = (data) => {
  
   // setTokn2("hey")
   if(data){
    getDa(data);
   }
    
  }
  const getDa =  (datas) =>{
   // console.log(datas);
   if(datas){
    setTokn(datas);
    setShowLogin(false);
   }
    
  }
  const token = getToken();
  const addCartItem = (data) =>{
    //console.log(data + 1);
    
    setCartItem(prev => prev + 1);
    
    // updateSesionData();
    
  }
  useEffect(() => {
    updateCart();
  
    return () => {
      
    }
  }, [cartItem])
  
  const updateCart = () => {
    
    localStorage.setItem('cant', JSON.stringify(cartItem));
  }
  return (
    <ShopContext.Provider value={{
        addCartItem,
        cartItem,
        tokn,
        setShowLogin,
        showLogin,
        getToken,
        loading,
        setLoading,
    }}>
        {props.children}
    </ShopContext.Provider>
  )
}
