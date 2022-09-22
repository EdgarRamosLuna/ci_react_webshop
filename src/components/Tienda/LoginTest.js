import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { LoginT } from '../../styles/Home';



const LoginTest = (props) => {
  const [correo, setCorreo] = useState("");
  const [pass, setPass] = useState("");
  const {closeModal, newDatan, tkn} = props;
  
  const hideModal = ()=>{
        if(typeof(closeModal) == 'function'){
            closeModal();
        }
    }
  const btnLogin = () =>{
    //alert(correo);
    const mail = [{correo:correo}]
        axios.post('https://oasistienda.com/tienda/login/checar_login2', JSON.stringify({'correo': correo, 'pass':pass}))
        .then(function (response) {
            console.log(response.data.mensaje);
            const id = response.data.cliente_id;
            let cart = response.data.session;
            localStorage.setItem('_', JSON.stringify(id));
         //   sessionStorage.setItem('cart', JSON.stringify(cart));
            let tokenString = localStorage.getItem('_');
           // let dataCart = sessionStorage.getItem('cart');
            //dataCart = JSON.parse(dataCart);
            //console.log(dataCart);
            if(tokenString){
                tokenString = parseInt(tokenString.replaceAll('"', ''));
             
                tkn(tokenString);
            }
            
        });
  }
  const saveProduct = async (e) => {
    e.preventDefault();
    await axios.post('https://oasistienda.com/home/test',{
        correo: correo,
    });
   // history.push("/");
}
const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <LoginT onClick={hideModal}>
        <div className="modal-login" >
            <div className="div-cont-login">
                <div className="div-cont-login-body">
                    <div className="cont-login3" onClick={handleModalContainerClick}>
                        <div className="cont-login3-body">
                            <div className="cont-login1-form-top">
                                <div className="cont-login1-form-top-txt">INGRESA A TU CUENTA</div>
                            </div>
                            <div className="cont-login1-form-inputs">
                                <div className="cont-login1-form-top-input">
                                    <div className="cont-login1-form-top-input-label">
                                        <label for="">Correo</label>
                                    </div>
                                    <div className="cont-login1-form-top-input-field">
                                        <input type="text" name="usuario" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                                    </div>
                                </div>
                                <div className="cont-login1-form-top-input">
                                    <div className="cont-login1-form-top-input-label">
                                        <label for="">Contraseña</label>
                                    </div>
                                    <div className="cont-login1-form-top-input-field">
                                        <input type="password" name="contra" value={pass} onChange={(e) => setPass(e.target.value)} />
                                    </div>
                                </div>
                                <div className="cont-login1-form-top-input">
                                    <div className="cont-login1-form-top-input-label">
                                        <label for=""><a href="#" className="olvidaste">¿Olvidaste tu contraseña? </a></label>
                                    </div>
                                    <div className="cont-login2-body-btn">
                                        <button className="btnLogin" onClick={btnLogin}>Ingresar</button>
                                    </div>
                                </div>
                            </div>				
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </LoginT>
  )
}

export default LoginTest