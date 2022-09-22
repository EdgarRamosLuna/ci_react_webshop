import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { LoginT, RetirarCont } from '../../styles/Home';


const UserPanel = (props) => {
  const {userId, closeModal} = props;
  const [dataCuenta, setDataCuenta] = useState([]);
  const [showR, setShowR] = useState(false);
  const hideModal = ()=>{
    if(typeof(closeModal) == 'function'){
        closeModal();
    }
}
  useEffect(() => {
    axios.post("https://oasistienda.com/tienda/home/cuenta/", JSON.stringify({'id': userId})).then(res =>{
        console.log(res.data);
        setDataCuenta(res.data);
    }).catch(err =>{
        console.log(err);
    });
    
    
  }, [])
  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <LoginT onClick={hideModal}>
        <RetirarCont>
        <div className="cont-login1" onClick={handleModalContainerClick}>
				<div className="cont-login1-form">
					<div className="cont-login1-form-top">
						<div className="cont-login1-form-top-txt1"><a href="#" className="cambiarP">Cambiar contraseña</a></div>
						<div className="cont-login1-form-top-txt2"><a href="https://oasistienda.com/tienda/login/salir/">Cerrar Sesión</a></div>
					</div>
					<div className="cont-login1-form-top-cambiarP" >
						<div className="cont-login1-form-top-input">
								<div className="cont-login1-form-top-input-label">
									<label for=""><span>Contraseña actual</span></label>
								</div>
								<div className="cont-login1-form-top-input-field">
									<input type="password" name="password" />
								</div>
						</div>
						<div className="cont-login1-form-top-input">
								<div className="cont-login1-form-top-input-label">
									<label for=""><span>Constraseña nueva</span></label>
								</div>
								<div className="cont-login1-form-top-input-field">
									<input type="password" name="newpassword" />
								</div>
						</div>
						<div className="cont-login1-form-top-input">
								<div className="cont-login1-form-top-input-label">
									<label for=""><span>Confirmar constraseña</span></label>
								</div>
								<div className="cont-login1-form-top-input-field">
									<input type="password" name="confirmpassword" />
								</div>
						</div>
						<div className="cont-login1-form-top-input">
								
								<div className="cont-login2-body-btn">
									<a href="#"><button className="cPassword">Cambiar Contraseña</button></a>
								</div>
						</div>
					</div>
					<div className="cont-login1-form-top">
						<div className="cont-login1-form-top-txt">MI CUENTA</div>
					</div>
					<div className="cont-login1-form-inputs">
						<div className="cont-login1-form-top-input">
							<div className="cont-login1-form-top-input-label nombreCuenta">
								<label for="">Usuario: <span>{dataCuenta.nombre}</span></label>
							</div>
						</div>
						<div className="cont-login1-form-top-input">
							<div className="cont-cuadro-saldo">
									<div className="cont-saldo-ico">
										<img src="https://oasistienda.com/imagenes/dineros.png" alt="" />
									</div>
									<div className="cont-saldo-label">
										<label for="">Saldo en tu cuenta: </label>
									</div>
									<div className="cont-saldo-monto">
										<span>$<b>{dataCuenta.saldo_t_pros}</b></span>
									</div>
							</div>
						</div>
						<div className="cont-login1-form-top-input">
							<div className="cont-cuadro-saldo">
									<div className="cont-saldo-ico">
										<img src="https://oasistienda.com/imagenes/dineros.png" alt="" />
									</div>
									<div className="cont-saldo-label">
										<label for="">Puntos OS: </label>
									</div>
									<div className="cont-saldo-montoST">
										<span>${dataCuenta.saldo_tienda}<br /></span>
									</div>
									<div className="retirarPts">
										<div className="retirarPts-btn">
											<button className="btnRPo" onClick={()=> setShowR(prev => !prev)}><i className="fa-solid fa-wallet"></i></button>
										</div>
										<div className="retirarPts-cont" style={{display:`${showR ? "flex":"none"}`}}>
											<input type="text" name="tarjeta" placeholder="Numero de tarjeta" maxlength="19" />
											o 
											<input type="text" name="clabe" placeholder="CLABE interbancaria" maxlength="18" />
											<hr />
											<input type="text" name="monto" placeholder="Monto a retirar" />
											<hr />
											<div className="retirarPts-btn">
												<button id="retiraros">Retirar puntos OS</button>
											</div>
										</div>
									</div>
							</div>
						</div>
					</div>

				</div>
                <div class="cont-login2 datos-fondos"></div>
			</div>
            </RetirarCont>
    </LoginT>
  )
}

export default UserPanel