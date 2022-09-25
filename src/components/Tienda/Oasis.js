import React, { useState, useEffect, useContext } from 'react';

import axios from 'axios'

import Header from './Header';
import { HomeS, LoadingS, Products } from '../../styles/Home';
import Home from './Data/Home';
import Banner1 from './Data/Banner1';
import Contact from './Contact';
import { ShopContext } from '../../context/TaskContext';
const Oasis = () => {
  const [dataTienda, setDataTienda] = useState([]);
  const [dataTienda2, setDataTienda2] = useState([]);
  const [dataTienda3, setDataTienda3] = useState([]);
  const [dataTienda4, setDataTienda4] = useState([]);
  const [dataTienda5, setDataTienda5] = useState([]);
 
  const [loading, setLoading] = useState(true);
  useEffect(() => {
       axios.get('https://oasistienda.com/home/indexReact').then(res =>{
       console.log(res.data);
        if (res.data) {
          setLoading(false);
        }
        setDataTienda(res.data.datos2);
        setDataTienda2(res.data.datos3);
        setDataTienda3(res.data.datos6);
        setDataTienda4(res.data.datos[0].imagen);
        setDataTienda5(res.data.banner2[0].imagen2);
      //  setDataTienda(prevImages => (res.data));
        //setDataTienda(prev => ([...prev, res.data]));
        }).catch(err =>{
            console.log(err);
        });
     
  }, [])
  
  const [dataCant, setDataCant] = useState([]);
  

  
  const {addCartItem, cartItem} = useContext(ShopContext);

  //console.log(cartItem);
  return (
    <HomeS>
        {loading && <LoadingS><img src='assets/img/loading3.svg' /></LoadingS>}
        <Header/>
        
        <Banner1 img={`https://oasistienda.com/uploads/banners/banner/${dataTienda4}`}  pos="absolute" mb={552.422}  />
        <Home dataTienda = {dataTienda}  addItem={addCartItem}/>
        <Banner1 img={`https://oasistienda.com/uploads/banners/banner2/${dataTienda5}`} pos="absolute" mb={552.422}  />
        <div className='sugg'>
          <div className='sugTitle'>
              <p>
              Algo de esto te gustará
              </p>
          </div>
          <Home dataTienda = {dataTienda2}  addItem={addCartItem} pb={true}/>
        </div>
        <Home dataTienda = {dataTienda3}  addItem={addCartItem} bg={"#ebebeb"} rec={true}/>
        <Contact />
        

    </HomeS>
  )
}

export default Oasis;