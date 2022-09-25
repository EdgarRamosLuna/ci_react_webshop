import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Products, ProductsTienda, Recomendado } from '../../../styles/Home';

const Home = (props) => {
  const {dataTienda, addItem, bg, rec, pb} = props;
  const [cant, setCant] = useState(0);
  let dataCart = localStorage.getItem('cant');
  dataCart = JSON.parse(dataCart);
  dataCart = parseInt(dataCart);
 
  if(isNaN(dataCart)){
    dataCart = 0;
    
  }
  //console.log(dataCart);
  const [cartItem, setCartItem] = useState(dataCart);
  const addIt = () =>{
    setCartItem(prev => prev + 1)
    addItem(cartItem);
    //localStorage.setItem('cant', JSON.stringify(cartItem));
  }
  return (
    <ProductsTienda bgColor={bg} pb={pb}>
        {
            //dataTienda
            dataTienda.map(data =>
                <Products key={data.id} bg={data.file_name} >
                    {rec ? <Recomendado>Recomendado</Recomendado>:""}
                    <div className="container">
                    <Link to={`/productos/ver/${data.id}`}>
                    
                        <div className="img">
                           
                        </div>
                        <div className="name">
                            <p>
                                {data.nombre}
                            </p>
                        </div>
                        <div className="price">
                            ${data.precio}
                        </div>
                    
                    </Link>
                        <div className="btn-addCart">
                            <button onClick={addIt}>Añadir al carrito</button>
                        
                        </div>
                    </div>
                </Products>
            )
        }
    </ProductsTienda>
  )
}

export default Home