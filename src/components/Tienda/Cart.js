import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/TaskContext';
import { CartBtn, CartDat, CartFooter, LoadingSmall } from '../../styles/Home';
import Notify from '../helpers/Notify';
import CartData from './Data/CartData';


const Cart = () => { 
   const { cartItemD, loading, setLoading, showAlertStock, subTotal, tokenString, setUserInfo, userInfo, numberWithCommas} = useContext(ShopContext);
  

   useEffect(() => {
        console.log(tokenString);
        axios.post('https://oasistienda.com/home/getData', JSON.stringify({'t': tokenString, })).then(res =>{
            console.log(res.data);
            if (res.data.length > 0) {
                setUserInfo(prev => [...prev, {nombre:`${res.data[0].nombreCliente} ${res.data[0].apellido_paterno} ${res.data[0].apellido_materno}`, calle:res.data[0].calle, cp:res.data[0].cp, col:res.data[0].colonia, ciudad:res.data[0].municipio, estado:res.data[0].estado,num_int:res.data[0].num_int, num_ext:res.data[0].num_ext}])
            //  setCartItem(prev => [...prev, {id:tokn, name:res.data[0].nombre_producto,}]);
            }
        }).catch(err =>{
            console.log(err);
        });
       setLoading(true);
       setTimeout(() => { 

        setLoading(false);
    }, 500)
   }, [])
   console.log(userInfo);
  return (
    <CartDat>
        {showAlertStock && <Notify>No hay mas productos disponibles, intenta mas tarde.</Notify>}
        <div className="cart-header"></div>
        <div className="cart-content">
            <div className="cart-logo">
                <img src="/assets/img/logo.png" />
                <a href="/">Regresar a la tienda</a>
            </div>
            {
                loading 
                ? 
                <LoadingSmall><img src='assets/img/loading3.svg' /></LoadingSmall> 
                :
                cartItemD.length > 0 
                ? 
                <div className="cart-items-container">
                    <div className="cart-items"> 
                        <div className="cart-title">
                            <h2>Tu Pedido</h2>
                        </div>
                        
                        <CartData />
                        
                        <CartFooter>
                            <div className='footer-info'>
                                <div className='footer-saldo'>
                                    <div className='footer-saldo-info'><h4>SALDO EN TU CUENTA </h4>-<div className='footer-saldo-amount'>$100.00</div></div>
                                    
                                    <div className='footer-saldo-amount-pay'><p>Cantidad a usar para pagar</p> <div className='amout-pay-i'><input type="text" /></div></div>
                                </div>
                                <div className="footer-cont">
                                    <div className='footer-cont-info'>
                                        <hr />
                                        <span>
                                        Subtotal
                                            
                                        </span>
                                        <span>
                                        Saldo
                                            
                                        </span>
                                        <span>
                                        Costo de envío
                                            
                                        </span>
                                        <span>
                                        Total
                                            
                                        </span>
                                        <hr />
                                    </div>
                                    <div className='footer-data'>
                                        <span>
                                        
                                        <b><div>$</div>{numberWithCommas(parseFloat(subTotal).toFixed(2))}</b>
                                            
                                        </span>
                                        <span>
                                        
                                        <b><div>$</div>{numberWithCommas(10000.00)}</b>
                                            
                                        </span>
                                        <span>
                                        
                                        <b><div>$</div>80.00</b>
                                            
                                        </span>
                                        <span>
                                        
                                        <b><div>$</div>{numberWithCommas(1080.00)}</b>
                                            
                                        </span>
                                    </div>
                                </div>
                                <div className="footer-cont2">
                                    <div className="cart-ship">
                                        <h3>Compra menor a mil pesos son $80 de envío</h3>
                                    </div>
                                    <div className="cart-btn">
                                        <CartBtn>
                                            Pagar
                                        </CartBtn>
                                    </div>
                                </div>
                            </div>
                            
                        </CartFooter>
                    </div>
                    
                    <div className="cart-info">      
                        <div className="cart-info-title">
                            <h2>CHECKOUT</h2>
                        </div>
                        <div className="cart-info-content">
                            <div className="cart-info-desc">
                                <b>Información de envío</b>
                                <hr/>
                            </div>
                            <div className="cart-info-data">
                                {userInfo.map((user, index) =>{
                                    return(
                                    <div className="cart-info-data-item" key={index}>
                                        <div className="user-name">{user.nombre}</div>
                                        <div className="user-street">{user.calle} #{user.num_ext}</div>
                                        <div className="user-col">{user.col}</div>
                                        <div className="user-location">{user.ciudad}, {user.estado}</div>
                                    </div>
                                    )
                                }) 
                                    
                                }
                            </div>
                            <div className="cart-info-payment">
                                Por el momento solo estamos recibiendo pagos con saldo
                            </div>
                        </div>
                        
                    </div>
                </div> : 
                <div className="">
                    <p>
                        Tu carrito está vacío
                    </p>
                </div>
                
                
                
            }
            
        </div>
    </CartDat>
  )
}

export default Cart