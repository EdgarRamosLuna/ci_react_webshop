import styled from "styled-components";

export const HomeS = styled.div`
  
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background:#fff;
  
    i{
        font-family: "Font Awesome 6 Free" !important;
    }
    a{
        text-decoration:none ;
        color: #fff;
    }
    .productosTienda {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        max-width: 1600px;
        margin: 0 auto;
        a{
            width:100% ;
            height:100%;
        }
    }
  
`;
export const Products = styled.div`
    width: 30.33%;
    height: auto;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.12);
    transition: box-shadow .2s ease-in-out,-webkit-box-shadow .2s ease-in-out;
    background: #fff;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 1.5%;
    cursor: pointer;
    &:hover{
        transition: box-shadow .2s ease-in-out,-webkit-box-shadow .2s ease-in-out;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,.1);
    }
    .container {
        width: 100%;
        box-sizing: border-box;
        padding: 20px 0;
        color:#ff9831 ;
        a{
            color:#000 ;
        }
    }
    .name {
        margin: 20px 10%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 35px;
    }
    .name p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .img{
        background: url(${props => props.bg ? `https://oasistienda.com/uploads/multimedia/${props.bg}`:""}) ;
        width: 100%;
        min-height: 300px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        max-width: 300px; 
        margin:0 auto ;
    }
    .btn-addCart {
        width: 100%;
        margin: 29px 0;
        button {
            width: 150px;
            height: 40px;
            border: 0;
            background: #ff9831;
            color: #fff;
            border:1px solid inherit ;
            cursor: pointer;
            transition:all 0.3s;
            &:hover{
                transition:all 0.3s;
                background: #fff;
                color: #ff9831;
                border:1px solid #ff9831 ;
            }
        }
    }
`;
export const LoginT = styled.div`
    
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #333333b0;
    color:#fff;
    font-size:1.1rem ;
    cursor: pointer;
    .modal-login {
        width: 100%;
        
    }
    .div-cont-login{
        width: 100%;
        float: left;
        cursor: pointer;
    }
    .div-cont-login-body{
        
        width: 50%;
        display: flex;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        cursor: default;
        margin-top: 50px;
        margin-bottom: 50px;
    }
    .cont-login3 {
        width: 100%;
        float: left;
        height: 653px;
        background-image: -moz-linear-gradient( 90deg, rgb(233,136,22) 0%, rgb(255,242,0) 100%);
        background-image: -webkit-linear-gradient( 90deg, rgb(233,136,22) 0%, rgb(255,242,0) 100%);
        background-image: -ms-linear-gradient( 90deg, rgb(233,136,22) 0%, rgb(255,242,0) 100%);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .cont-login3-body {
        width: 70%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }
    .cont-login1-form-top{
        color: #000;
    }
    .cont-login1-form-top-input-field input {
        width: 100%;
        height: 48px;
        margin: 0;
        box-sizing: border-box;
        padding: 5px;
        border: 1px solid #b7b7b7;
        outline: none;
    }
    .cont-login1-form-top-input-label {
        display: flex;
        color:#000;
        margin: 10px 0;
    }
    .cont-login2-body-btn button {
        width: 257px;
        height: 69px;
        border: 0;
        background: #fff;
        color: #ff9831;
        border-radius: 5px;
    }
    /*Cuenta usuario*/
    .cont-login1 {
        width: 50%;
        display: flex;
        background: #fff;
        height: 660px;
        position: relative;
        margin: 0 auto; 
    }
    .cont-login2 {
        width: 5%;
        float: left;
        height: 660px;
        background-image: -moz-linear-gradient( 90deg, rgb(233,136,22) 0%, rgb(255,242,0) 100%);
        background-image: -webkit-linear-gradient( 90deg, rgb(233,136,22) 0%, rgb(255,242,0) 100%);
        background-image: -ms-linear-gradient( 90deg, rgb(233,136,22) 0%, rgb(255,242,0) 100%);
    }
    .cont-login1-form-top-cambiarP {
        width: 100%;
        float: left;
        display: none;
    }
    .cont-cuadro-saldo {
        width: 40%;
        float: left;
        margin-left: 30%;
        margin-right: 30%;
        border-radius: 5px;
        max-height: 250px;
        overflow-y: auto;
        background-color: rgb(255, 255, 255);
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
        padding: 15px;
        margin-bottom: 30px;
        text-align: left;
    }
    .cont-cuadro-saldo {

        width: 40%;
        float: left;
        margin-left: 30%;
        margin-right: 30%;
        border-radius: 5px;
        max-height: 250px;
        overflow-y: auto;
        background-color: rgb(255, 255, 255);
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
        padding: 15px;
        margin-bottom: 30px;

    }
    .cont-saldo-ico {
        width: 100%;
        float: left;
        margin-bottom: 10px;
    }
    .cont-saldo-label {
        width: 100%;
        float: left;
        margin-bottom: 10px;
        color:#000;
    }
    .cont-saldo-monto, .cont-saldo-montoST {
        width: 100%;
        float: left;
        font-size: 1.5em;
        color: #31aeaf;
    }
    .retirarPts {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 16px 0;
        flex-direction: column;
    }
    .retirarPts-btn {
        display: flex;
        justify-content: center;
    }
    .retirarPts-cont {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 15px 0;
        display: none;
        align-items: center;
        input {
            height: 38px;
            width: 100%;
            margin: 0;
            box-sizing: border-box;
            padding: 5px;
                padding-right: 5px;
                padding-left: 5px;
            border: 1px solid #b7b7b7;
            text-align: center;
        }
        
    }
    .retirarPts-btn {
            display: flex;
            justify-content: center;
            button {
                color: #fff;
                background: #ff9831;
                border: 0;
                box-sizing: border-box;
                padding: 10px;
                border-radius: 5px;
                width: 100%;
                transition: all 0.3s;
                border: 1px solid #ff9831;
                cursor: pointer;
                &:hover{
                    color: #ff9831;
                    transition: all 0.3s;
                    background: #fff;
                    border: 1px solid #ff9831;
                }
            }
    }
    
    
`;
export const RetirarCont = styled.div`
    width: 100%;
    .cont-login1-form-top-input {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .cont-login1-form-top {
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin: 20px auto;
        a{
            color:#ff9831 !important ;
        }
    }
    .cont-login1-form-top-txt {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .cont-login1-form-top-input-label label{
        color: #ff9831;
        font-weight:bold;
        span{
            color: #049bed;
            font-size: 1em;
            font-weight:lighter !important;
        }
    }
    .cont-login1-form {
        width: 100%;
        cursor:default;
    }
`;
export const HeaderS = styled.div`
    width:100% ;
    @font-face {
            font-family: 'AB';
            src:url(/assets/fonts/Asap-Bold.otf);
    }
    *{
        font-family: 'AB';
    }
    i{
        font-family: "Font Awesome 6 Free" !important;
    }
    a{
        text-decoration:none ;
        color: #fff;
    }
    .productosTienda {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        max-width: 1600px;
        margin: 0 auto;
    }
    .rebajas {
        color: #ea1616 !important;
    }
    
    .header-amarillo {
        width: 100%;
        float: left;
        height: 60px;
        background: #ff9831;
        color: #fff;
        text-align: right;
        display: flex;
        justify-content: end;
        top:0;
    }
    
    .carrito-header {
        width: 5%;
        float: right;
        height: 60px;
        position: relative;
        text-align: center;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        .carrito-header-btnCart img {
            filter: brightness(0) invert();
        }
    }
    .cuenta-header {
        width: 15%;
        height: 60px;
        position: relative;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .buscar-header {

        float: right;
        box-sizing: border-box;
        height: 60px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .input-container input {
        min-width: 385.75px;
        width: 100%;
        padding: 10px;
            padding-right: 10px;
            padding-left: 10px;
            padding-right: 10px;
            padding-left: 10px;
            border: 0;
            outline: none;
    }
    .header-blanco {
        width: 100%;
        display: flex;
        ul {
            li{
                width: 20%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            width: 100%;
            display: flex;
            padding: 0;
            margin: 0;
        }
    }
    .header-blanco-contMenu {
        width: 100%;
        display: flex;
        height: 150px;
        justify-content: center;
        align-items: center;
    }
    .menuItems{ 
        width: 100%;
        display: flex ;
        li {
            width: auto !important;
            margin: 0 5px;
            a {
                color: #000;
                display: flex;
                width: 100%;
                height: 100%;
                justify-content: center;
                align-items: center;
                padding: 14px 16px;
                text-decoration: none;
                font-size: 1.5em;
            }
        }
    }
    .logo img {
        width: 80px;
    }
    .input-container{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        background: #fff;
        /*&:before{
            font-family: "Font Awesome 6 Free" !important;
            content: "\f002";
            font-style: normal;
            font-variant: normal;
            line-height: 1;
            text-rendering: auto;
            font-weight: 900;
        }*/
    }
    #buscarBtn {
        color: #ff9831;
        margin: 0 25px;
        cursor: pointer;
    }
    .sticky {
        position: fixed;
    }
    .sticky2 {
        margin-top:60px;
    }
    `;
export const ProductView = styled.div`
 margin-bottom: 5%;
.cont-producto {
  width: 80%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
}
.div-cont-producto-top {
  max-width: 25%;
}
.cont-producto-top-txt {
  display: flex;
  align-items: center;
  height: 55px;
}
.cont-producto-top-txt span {
    text-transform: uppercase;
    gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 36px;
}
.div-cont-producto-top a {
    &:nth-child(1){
        color: #ff8000;
    }
  color: #ff9831;
}
.div-cont-producto-body {
  width: 100%;
  display: flex;
}
.div-cont-producto-body-imgs.imgcontainer {
  width: 50%;
}
.div-cont-producto-body-data {
  display: flex;
  flex-direction: column;
  width: 50%;
}
.producto-body-data-top {
  width: 100%;
  display: flex;
  justify-content: start;
  text-align: left;
}
.producto-body-data-top {
  text-align: left;
}
.producto-body-data-top-txt h1 {
  margin: 0;
  padding: 0;
  text-transform: uppercase;
}
.linea-amarilla {
  width: 10%;
  height: 5px;
  background: #ff9831;
  float: left;
}
.producto-body-data-precio {
  display: flex;
}
.producto-body-data-desc {
  display: flex;
}
.producto-body-data-desc-txt {
  white-space: pre-line;
  text-align: left;
}
.producto-body-data-cant {
  display: flex;
  align-items: center;
  gap: 15px;
}
.producto-body-data-cant-btns {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  i {
    font-size: 2em;
    color: #ff9831;
  }
}
.producto-body-data-cant-btns div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.producto-body-data-btn{
    display:flex;
}
.btn-cart {
  width: 223px;
  height: 69px;
  border: 0;
  background: #ff9831;
  color: #fff;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1.2em;
}
.producto-body-data-cant-num input {
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 0;
  outline: none;
}
.producto-body-img {
  display: flex;
  cursor: pointer;
}
.img {
  width: 100%;
  display: flex;
}
.imgsP {
  display: flex;
  width: 100%;
  gap:15px ;
  div {
    max-width: 190px;
    background-size: 100%;
  }
}
`;
export const ProductViewImg = styled.div`

    background: url(${props => props.bg ? `https://oasistienda.com/uploads/multimedia/${props.bg}`:""}) ;
    width: 100%;
    min-height: 300px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    max-width: 300px; 

`;
export const CarritoItems = styled.div`
    .carrito-header-btnCart{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        &:before{
                content: '${props => props.cant}';
                position: absolute;
                z-index: 5;
                right: 0;
                font-size: 0.9em;
                top: -12px;
                font-weight: lighter;
                width: 25px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 100%;
                word-break: break-all;
                height: 25px;
                color: #fff;
             //   box-shadow: 0 1px 5px 0px rgba(0,0,0,.1);
        }
    
    }
    a{
        gap: 5px;
        justify-content: center;
        align-items: center;
        display: flex;
    }
`;
export const Sticky = styled.div`
    display: flex;
    margin-right:auto ;
    width: 70%;
    a{
        text-decoration: none;
        color: #fff;
        width: 50px;
        height: 50px;
        display: flex;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
    }
    ul {
        display: flex;
        list-style: none;
        justify-content: center;
        align-items: center;
        margin:0 ;
        padding:0 ;
        width: 100%;
        &:nth-child(1) li{
            width:20%;
        }
    }
    .menuItems {
        width: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        justify-content: start;
        align-items: center;
        li a{
            font-size:1em ;
            color: #fff;
        }
    }
    .logo img {
        width: 50%;
        //filter:inverse(100);
       // filter: invert() brightness() grayscale(100);
    }
`;
export const SpacerS = styled.div`
    width: 70%;
    height: 100%;
`;