import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { useContext } from 'react';
import { ShopContext } from '../../../context/TaskContext';
import { CartFooter, CartItem } from '../../../styles/Home';


const CartData = () => {
  const { cartItemD, setShowAlertStock, setCartItemD, setCartItemN,subTotal,setSubTotal, tokn,} = useContext(ShopContext);
  const initialState = [{
        id: "",
        name: "",
        img: "",
        price: "",
        stock:"",
        cant: "",
      }]
  const [cartItem, setCartItem] = useState([]);
  //console.log(cartItem);
  const [cant, setCant] = useState([]);
  let subtotal = 0;
  useEffect(() => {
    setSubTotal(0);
    
    for (let i = 0; i < cartItemD.length; i++) {
        const id = cartItemD[i].id;
        const cant = cartItemD[i].cant;
        axios.post('https://oasistienda.com/home/getCartItems', JSON.stringify({'idp': id, })).then(res =>{
        //console.log(res.data);
        if (res.data) {
           let total = parseFloat(res.data[0].precio) * parseFloat(cant);
           subtotal += total;
           total = parseFloat(total);
           total = total.toFixed(2);

           setSubTotal(subtotal);
           setCartItem(prev => [...prev, {id:id, name:res.data[0].nombre_producto, img:res.data[0].file_name, price:res.data[0].precio, stock:res.data[0].inventario, cant:cant, total:total}]);
        }
        setCant(prev => [...prev,{id:id,cant:cant, stock:res.data[0].inventario, price:res.data[0].precio}]);
        //setDataTienda(prev => ([...prev, res.data]));
        }).catch(err =>{
            console.log(err);
        });
        
    }
    
  
}, [])
useEffect(() => {
    
   for (let i = 0; i < cant.length; i++) {
    const element = cant[i];
       let total = parseFloat(element.price) * parseFloat(element.cant);
        subtotal += total;
        console.log(subtotal);
        setSubTotal(subtotal);
   }
}, [cartItemD])

  const removeCarItem = (data) => {
    alert(data);
  }
  
  const updateCant  = (e, id) => {
    //console.log(cant);
    //alert(e.target.value);
    //console.log(e.target.name);
    let val = e.target.value;
   // setCant(e.target.value)
   /*for (let i = 0; i < cant.length; i++) {
    const element = cant[i];
    if(i == indx){
        console.log(element);
        
    }
    
   }*/
   let nwcant = 0;
   const newState = cant.map(obj => {
        if (obj.id === id) {
        return {...obj, cant: val};
        }
        return obj;
    });
    //setCant(newState);
    
  }
  const updateCantA  = (e, id, stock) => {
    stock = parseInt(stock);
   const newState = cant.map(obj => {
        let ca = obj.cant;
        ca = parseInt(ca);
        //console.log(ca);
            
        if (obj.id === id) {
        if(parseInt(ca) > stock){
            setShowAlertStock(true);
            setTimeout(() => {
                setShowAlertStock(false);
            }, 3000)
        }
        if(parseInt(ca) >= stock){
            ca = stock;
            
        }else{
            ca = parseInt(ca) + 1;
            setCartItemN(prev => prev + 1);
            
        }
        return {...obj, cant: parseInt(ca)};
        }
        return obj;
    });
    setCant(newState);
    setCartItemD(newState);
    
    
  }
  const updateCantR  = (e, id, stock) => {
    stock = parseInt(stock);
    const newState = cant.map(obj => {
         if (obj.id === id) {
            let ca = obj.cant;
            if(ca == 1){
                ca = 1;
                setCartItemN(prev => prev);
            }else{
                ca = ca - 1;
                setCartItemN(prev => prev - 1);
            }
            return {...obj, cant: ca, };
        }
        return obj;
    });
    setCant(newState);
    setCartItemD(newState);
    
    
   }
   //console.log(cartItemD);
  return (
    <div className="cart-item">
      {
      cartItem.map((data, index) => {

            
            return (
                
                    <CartItem key={data.id} bg={data.img}>
                        <div className="cart-item-remove"><button onClick={() => removeCarItem(data.id)}></button></div>
                        <div className="img"></div>
                        <div className="name">{data.name}</div>
                        <div className="price">
                            <b>Unitario</b>
                            <div className="price-container">
                                <span className="symb">$</span>
                                <span className="pri">
                                    {data.price}
                                </span>
                                
                            </div>
                        </div>
                        <div className="cant">
                            <div className='add' onClick={(e)=> updateCantR(e, data.id, data.stock)} >
                               
                            </div>
                            <span>{cant[index].cant}</span>
                            {/*<input name={`cant${data.id}`} value={cant[index].cant} onChange={(e)=> updateCant(e, data.id)} readOnly />*/}
                            <div className='remove' onClick={(e)=> updateCantA(e, data.id, data.stock)} >
                               
                            </div>
                        </div>
                        <div className="total">
                        Total <br/>
                        ${parseFloat(parseInt(cant[index].cant) * parseFloat(data.price)).toFixed(2)}
                        </div>
                        
                    </CartItem>

            )
        })
     }
    </div>
  )
}

export default CartData