import React from 'react'
import { ContactS } from '../../styles/Home'

const Contact = () => {
  return (
    <ContactS>
            <div className="contacto-content">
                <div className="contacto-header">
                    <div className="contacto-header-title">
                        <p>
                        Si tienes alguna duda, contáctanos.
                        </p>
                    </div>
                </div>
                <div className="contacto-body">
                    <div className="contacto-body-form">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="ASUNTO" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="TU CORREO ELECTRÓNICO" />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control txtArea" placeholder="MENSAJE"></textarea>
                        </div>
                        <div className="form-group">
                            <button>Enviar</button>
                        </div>
                    </div>
                    <div className="contacto-img">
                        <img src="https://oasistienda.com/imagenes/contactobg.jpg"/>
                    </div>
                </div>
            </div>
    </ContactS>
    
  )
}

export default Contact