import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ShopContext } from '../../context/TaskContext';
import GlobalStyle from '../../styles/globalStyles';

import { CarritoItems, HeaderS, SpacerS, Sticky } from '../../styles/Home'
import Notify from '../helpers/Notify';
import CartItems from './Data/CartItems';
import LoginTest from './LoginTest';
import UserPanel from './UserPanel';

const Header = (props) => {
  
  const [showUserPanel, setShowUserPanel] = useState(false);
  const {addCartItem, cartItemN, tokn, setShowLogin, showLogin, getToken, showAlertStock, setShowAlertStock} = useContext(ShopContext);
  const hideModalCat = () =>{
    setShowLogin(false);
  }
  const hideModalUser = () =>{  
    setShowUserPanel(false);
  }

  const [cIt, setCIt] = useState(0)
  
  /*useEffect(() => {
    
    if(tokenString){
        tokenString = JSON.parse(tokenString);
        tokenString = parseInt(tokenString);
        setTokn(tokenString);
        setShowLogin(false);
    }
    axios.get(`https://oasistienda.com/tienda/login/haveSession`).then(res =>{
        console.log(res.data);
       
      //  setDataTienda(prevImages => (res.data));
        //setDataTienda(prev => ([...prev, res.data]));
        }).catch(err =>{
            console.log(err);
        });
  }, [])*/
  
  
  


  const [cont, setCont] = useState(0);
  //console.log(showLogin);

  const [scrollT, setScrollT] = useState(0);
  const [moreThan, setMoreThan] = useState(false);
  const myFunction = () =>{
    var navbar = document.getElementById("navbar");
    var navbar2 = document.getElementById("hb");
    var sticky = navbar.offsetTop;
    var sticky2 = navbar.offsetTop;
    setScrollT(sticky);

    if(window.pageYOffset > sticky2 + 150){
        setMoreThan(true);
        console.log(navbar2.offsetTop);
    }else{
        setMoreThan(false);
    }
    if (window.pageYOffset > sticky) {
      //  setScrollT()
        navbar.classList.add("sticky")
        navbar2.classList.add("sticky2")
    } else {
        navbar.classList.remove("sticky");
        navbar2.classList.remove("sticky2")
        setTimeout(() => {
            
           
        }, 1000);
    }
  }
  useEffect(() => {
    
    window.onscroll = function() {myFunction()};
    return () => {
      
    }
  }, [scrollT])
  
  const MenuStick = () =>{
    return(
        <Sticky>
            <ul>
			        <li><Link to="/" className="logo"> <img src="/assets/img/logo.png" alt="" /></Link></li>
			        <div className="menuItems">
                <li><a href="#rebajas" className="rebajas">REBAJAS</a></li>
                <li><a href="https://oasistienda.com/#lo_nuevo">Categorías</a></li>
                <li><a href="https://oasistienda.com/#lo_nuevo">Lo Nuevo</a></li>
                <li><a href="https://oasistienda.com/#mas_vendido">Lo Mas Vendido</a></li>
                <li><a href="https://oasistienda.com/#recomendado">Recomendado</a></li>
                <li><a href="https://oasistienda.com/#contacto">Contacto</a></li>
              </div>
			      </ul>
        </Sticky>
    )
  }
  const [showAlert, setShowAlert] = useState(false);
  const isUser = () =>{
    setShowAlert(true);
    setTimeout(() => {
          setShowAlert(false);
    }, 3000);
  }
  return (
    <HeaderS>
   
        {showLogin ? <LoginTest closeModal={hideModalCat} tkn={getToken}/>:""}
        {showUserPanel ? <UserPanel userId={tokn} closeModal={hideModalUser} />:""}
        {showUserPanel ? <GlobalStyle isModal={true} />:""}
        {showAlert && <Notify>Inicia sesion para poder completar tu compra!</Notify>}
        
        <div className="header-amarillo" id="navbar">
            {moreThan ? <MenuStick />:<SpacerS></SpacerS>}
            <div className="buscar-header">
                <div className="input-container">
                
                    <input className="input-campo" type="text" placeholder="¿Qué estás buscando?" name="buscar" />
                    <i className="fas fa-search icon buscarBtn" id="buscarBtn" onClick={(e)=> setCont(prev => prev + 1)}></i>
                </div>
            </div>
            <div className="cuenta-header">
                <div className="cuenta-header-btn">
                    {tokn > 0 ? <a href="#" className="cuentaBtn" onClick={(e)=> setShowUserPanel(prev => !prev)}>Mi Cuenta</a>:<a href="#" className="cuentaBtn" onClick={(e)=> setShowLogin(prev => !prev)}>Ingresa</a>}
                    
                </div>
            </div>
		    <div className="carrito-header">
                <CarritoItems >
				    <div className="carrito-header-btnCart"><span>{tokn > 0 ? <a href="/cart"><img src="https://oasistienda.com/tienda/img/carrito.png" alt="" /> <div className="cantNumber"><CartItems dataItems={cartItemN}/></div></a> : <div onClick={isUser}><img src="https://oasistienda.com/tienda/img/carrito.png" alt="" /> <div className="cantNumber"><CartItems dataItems={cartItemN}/></div></div>}</span></div>
                
                </CarritoItems>
                                
            </div>
            
        </div>
        <div className="header-blanco" id="hb">
		<div className="header-blanco-contMenu">
			<ul>
			  <li><Link to="/" className="logo"> <img src="https://oasistienda.com/tienda/img/logo.png" alt="" /></Link></li>
			  <div className="menuItems">
                <li><a href="#rebajas" className="rebajas">REBAJAS</a></li>
                <li><a href="https://oasistienda.com/#lo_nuevo">Categorías</a></li>
                <li><a href="https://oasistienda.com/#lo_nuevo">Lo Nuevo</a></li>
                <li><a href="https://oasistienda.com/#mas_vendido">Lo Mas Vendido</a></li>
                <li><a href="https://oasistienda.com/#recomendado">Recomendado</a></li>
                <li><a href="https://oasistienda.com/#contacto">Contacto</a></li>
              </div>
			</ul>
		</div>	
	</div>
    <Outlet />
    </HeaderS>
  )
}

export default Header