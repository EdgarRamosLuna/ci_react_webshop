import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';

import { useParams } from 'react-router-dom';
import { ShopContext } from '../../context/TaskContext';
import { LoadingS, LoadingSmall, ProductView, ProductViewImg } from '../../styles/Home';

const ViewProduct = (props) => {
  const {addCartItem, cartItem, loading, setLoading, numberWithCommas} = useContext(ShopContext);
  const idP = useParams();
  console.log(idP);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [desc, setDesc] = useState("");
  const [imgs, setImgs] = useState([]);
  const [img, setImg] = useState([]);
  const [idI, setIdI] = useState(0);
  const [cat, setCat] = useState("");
  const {dataTienda, addItem} = props;
  useEffect(() => {
    
    setLoading(true);
    axios.get(`https://oasistienda.com/tienda/productos/verReact/${idP.idpro}`).then(res =>{
        
        const imgsData = res.data.imgs;
        if(res.data){
          setTimeout(() => {
            
            setLoading(false);
          }, 500);
          
        }
        setNombre(res.data.datos[0].nombrePro);
        setPrecio(res.data.datos[0].precioPro);
        setDesc(res.data.datos[0].descPro);
        setCat(res.data.datos[0].categoria);
        setImg(res.data.datos[0].file_name);
        for (let i = 0; i < imgsData.length; i++) {
            const element = imgsData[i];
            console.log(element.img);
            setImgs(prev => ([...prev, element]));
        }
       // setImgs(res.data.imgs);
      //  setDataTienda(prevImages => (res.data));
        //setDataTienda(prev => ([...prev, res.data]));
        }).catch(err =>{
            console.log(err);
        });
  }, [])
 /* const checkSesion = () =>{
    axios.get(`https://oasistienda.com/tienda/login/haveSession`).then(res =>{
        console.log(res.data);
       
      //  setDataTienda(prevImages => (res.data));
        //setDataTienda(prev => ([...prev, res.data]));
        }).catch(err =>{
            console.log(err);
        });
  }*/
  
  
  return (
    <>
    {loading ? 
      <LoadingSmall><img src='/assets/img/loading3.svg' /></LoadingSmall>
      : 
      <ProductView>
        
      <div className="cont-producto">
        <div className="div-cont-producto-top">
            <div className="cont-producto-top-txt">
                <span><a href="#">Categor??a</a><i className="fa-solid fa-chevron-right"></i><a href="#">{cat} </a></span>
            </div>
        </div>
        <div className="div-cont-producto-body">
          <div className="div-cont-producto-body-imgs imgcontainer">
            <div className="producto-body-img active">
              <div className="img" >
                          <ProductViewImg bg={img}>
                          
                          </ProductViewImg>
              </div>
            </div>
        <div className="producto-body-img">
          <div className="imgsP">
                      {
                          imgs.map(img =>
                              <ProductViewImg bg={img.img}>
                          
                              </ProductViewImg>
                          )
                      }
                  </div>
              </div>
      </div>
      <div className="div-cont-producto-body-data">
        <div className="producto-body-data-footer">
          <div className="producto-body-data-footer-cont">
          </div>
        </div>
        <div className="producto-body-data-top">
          <div className="producto-body-data-top-txt">
            <h1>{nombre}</h1>
            <span className="linea-amarilla"></span>
          </div>
        </div>
        <div className="producto-body-data-precio">
          <div className="producto-body-data-precio-txt">
            <h4>$ {numberWithCommas(precio)}</h4>
          </div>
        </div>
        <div className="producto-body-data-desc">
          <div className="producto-body-data-desc-txt">
            <p>{`${desc}`}</p>
          </div>
        </div>
        <div className="producto-body-data-cant">
          <div className="producto-body-data-cant-txt">
            <div className="producto-body-data-cant-txt-data">
              <p>Cantidad</p>
            </div>
          </div>
          <div className="producto-body-data-cant-btns">
            <div className="producto-body-data-cant-btn prev"><i className="fa-solid fa-caret-left"></i></div>
            <div className="producto-body-data-cant-num"><input type="text" value="1" /></div>
            <div className="producto-body-data-cant-btn next"><i className="fa-solid fa-caret-right"></i></div>
          </div>
        </div>
        <div className="producto-body-data-btn">
          <div className="producto-body-data-btn-body">
            <button className="btn-cart" data-id-producto="1" onClick={() => addCartItem(idP.idpro)}>A??adir al carrito</button>
          </div>
        </div>
        
      </div>
    </div>
      </div>  

      </ProductView>
    
    }
    </>
  )
}

export default ViewProduct