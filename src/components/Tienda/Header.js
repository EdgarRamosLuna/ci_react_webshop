import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import GlobalStyle from '../../styles/globalStyles';

import { CarritoItems, HeaderS } from '../../styles/Home'
import LoginTest from './LoginTest';
import UserPanel from './UserPanel';

const Header = (props) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showUserPanel, setShowUserPanel] = useState(false);
  const hideModalCat = () =>{
        setShowLogin(false);
  }
  const hideModalUser = () =>{
        setShowUserPanel(false);
  }
  const {cantItems} = props;
  const [tokn, setTokn] = useState();
  let tokenString = localStorage.getItem('_');
  useEffect(() => {
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
  let dataCart = localStorage.getItem('cant');
  dataCart = JSON.parse(dataCart);


  const [cont, setCont] = useState(0);
  //console.log(showLogin);
  return (
    <HeaderS>
        
        {showLogin ? <LoginTest closeModal={hideModalCat} tkn={getToken}/>:""}
        {showUserPanel ? <UserPanel userId={tokn} closeModal={hideModalUser} />:""}
        {showUserPanel ? <GlobalStyle isModal={true} />:""}
        <div className="header-amarillo">
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
				    <div className="carrito-header-btnCart"><span><a href="https://oasistienda.com/tienda/carrito/pagarSC/"><img src="https://oasistienda.com/tienda/img/carrito.png" alt="" /> <div className="cantNumber">{dataCart}</div></a></span></div>
                </CarritoItems>
                                
            </div>
            
        </div>
        <div className="header-blanco">
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