import React, { useState, useEffect } from 'react';

import axios from 'axios'

import Header from './Header';
import { HomeS, Products } from '../../styles/Home';
import Home from './Data/Home';
const Oasis = () => {
  const [dataTienda, setDataTienda] = useState([]);
  let dataCart = localStorage.getItem('cant');
  dataCart = JSON.parse(dataCart);
  dataCart = parseInt(dataCart);
 
  if(isNaN(dataCart)){
    dataCart = 0;
    
  }
  const [cartItem, setCartItem] = useState(dataCart);
  useEffect(() => {
        axios.get('https://oasistienda.com/home/test').then(res =>{
     //   console.log(res.data);
        setDataTienda(res.data);
      //  setDataTienda(prevImages => (res.data));
        //setDataTienda(prev => ([...prev, res.data]));
        }).catch(err =>{
            console.log(err);
        });
        
  }, [])
  
  
  const addCartItem = (data) =>{
    //console.log(data + 1);
    
    setCartItem(data + 1);
    localStorage.setItem('cant', JSON.stringify(data + 1));

   // updateSesionData();
    
  }

  

  //console.log(cartItem);
  return (
    <HomeS>
        <Header cantItems={cartItem}/>
        <Home dataTienda = {dataTienda}  addItem={addCartItem}/>
        

    </HomeS>
  )
}

export default Oasis;