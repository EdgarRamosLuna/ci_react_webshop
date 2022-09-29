import React, { useState, useEffect, useContext } from 'react';

import { Link } from 'react-router-dom';
import { ShopContext } from '../../../context/TaskContext';
import { Products, ProductsTienda, Recomendado } from '../../../styles/Home';

const Home = (props) => {
  const {dataTienda, bg, rec, pb} = props;
  const {addCartItem, cartItem, loading, setLoading} = useContext(ShopContext);
  
  //console.log(dataCart);
  
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
                            <span className="symb"> 
                                $
                            </span>
                            <span className="pric"> 
                                {data.precio}
                            </span>
                        </div>
                    
                    </Link>
                        <div className="btn-addCart">
                            <button onClick={() => addCartItem(data.id, data.inventario)}>Añadir al carrito</button>
                        
                        </div>
                    </div>
                </Products>
            )
        }
    </ProductsTienda>
  )
}

export default Home