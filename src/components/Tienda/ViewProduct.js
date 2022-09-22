import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { ProductView, ProductViewImg } from '../../styles/Home';

const ViewProduct = (props) => {
  const idCont = useParams();
  console.log(idCont);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [desc, setDesc] = useState("");
  const [imgs, setImgs] = useState([]);
  const [img, setImg] = useState([]);
  const [cat, setCat] = useState("");
  const {dataTienda, addItem} = props;
  let dataCart = localStorage.getItem('cant');
  dataCart = JSON.parse(dataCart);
  const [cartItem, setCartItem] = useState(dataCart);
  useEffect(() => {
    
    axios.get(`https://oasistienda.com/tienda/productos/verReact/${idCont.idpro}`).then(res =>{
        console.log(res.data);
        const imgsData = res.data.imgs;
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
  
  const addCarrito = ()=>{
    setCartItem(prev => prev + 1);
    localStorage.setItem('cant', JSON.stringify(cartItem + 1));
  }
  return (
    <ProductView>
    <div className="cont-producto">
	<div className="div-cont-producto-top">
		<div className="cont-producto-top-txt">
		    <span><a href="#">Categoría</a><i class="fa-solid fa-chevron-right"></i><a href="#">{cat} </a></span>
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
					<h4>$ {precio}</h4>
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
					<div className="producto-body-data-cant-btn prev"><i class="fa-solid fa-caret-left"></i></div>
					<div className="producto-body-data-cant-num"><input type="text" value="1" /></div>
					<div className="producto-body-data-cant-btn next"><i class="fa-solid fa-caret-right"></i></div>
				</div>
			</div>
			<div className="producto-body-data-btn">
				<div className="producto-body-data-btn-body">
					<button className="btn-cart" data-id-producto="1" onClick={addCarrito}>Añadir al carrito</button>
				</div>
			</div>
			
		</div>
	</div>
    </div>  

    </ProductView>
  )
}

export default ViewProduct