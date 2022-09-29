import styled from "styled-components";

export const HomeS = styled.div`
  
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background:#fff;
  .sugg {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        position: relative;
    }
    .sugTitle {
        width: 35%;
        display: flex;
        z-index: 10;
        background: #f19733;
        color: #fff;
        box-sizing: border-box;
        padding: 15px 2%;
        align-self: start;
        margin: 15px 0;
        font-size: 2em;
        clip-path: polygon(0 0, 75% 0%, 87% 50%, 75% 100%, 0 100%, 0% 50%);



        p{
            margin: 0%;
            padding: 0;
        }
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
        position: relative;
        z-index: 100;
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
    position: relative;
    
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
            border-radius: 25px;
            &:hover{
                transition:all 0.3s;
                background: #fff;
                color: #ff9831;
                border:1px solid #ff9831 ;
                border-radius: 5px;
            }
        }
    }
`;
export const LoginT = styled.div`
    
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 9999;
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
        background-image: -moz-linear-gradient( 90deg,#fbd442 0%,rgb(233 136 22) 30%);
        background-image: -webkit-linear-gradient( 90deg,#fbd442 0%,rgb(233 136 22) 30%);
        background-image: -ms-linear-gradient( 90deg,#fbd442 0%,rgb(233 136 22) 30%);
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .cont-login3-body {
        width: 70%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        .cont-login1-form-top-txt{
            color: #fff;

        }
        label{
            color: #fff;
        }
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
        background: #fff;
        color: #ff9831;
        border-radius: 5px;
        border: 1px solid #fff;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
            background: transparent;
            color: #fff;
            border: 1px solid #fff;
            transition: all 0.3s;
        }
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
    i.fa-solid.fa-circle-xmark {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 1.3em;
        cursor: pointer;
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
        z-index: 999;
        
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
        margin: 0 10px;
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
        background: #f19733;
        color: #fff;
        border: 1px solid #fff;
        &::placeholder{
            color: #fff;
        }
        @media (max-width:1000px) {
            min-width: 185.75px;
        }
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
            position: relative;
            display: flex;
            justify-content: center;
            transition: all 0.3s;
            &:before{
                    content: '';
                    position: absolute;
                    bottom: -6px;
                    width: 0%;
                    height: 3px;
                    background: white;
                    left: 0;
                    display: flex;
                    justify-content: center;
                    margin: 0 10%;
                    transition: all 0.3s;
                }
            &:hover {
                transition: all 0.3s;
                
                &:before{
                    content: '';
                    position: absolute;
                    
                    width: 80%;
                    transition: all 0.3s;
                }
            }
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
        margin: 0 10px;
        cursor: pointer;
    }
    .sticky {
        position: fixed;
        box-shadow: 0 8px 16px 0 rgb(0 0 0 / 10%);
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
        cursor: pointer;
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
    .cantNumber {
    position: absolute;
    display: flex;
    justify-content: center;
    background: #f19733;
    right: -10px;
    top: -5px;
    border-radius: 100%;
    border: 1px solid #fff;
    box-sizing: border-box;
    padding: 10px;
    width: 20px;
    height: 20px;
    font-size: 0.8em;
    align-items: center;
}
`;
export const Sticky = styled.div`
    display: flex;
    margin-right:auto ;
    width: 70%;
    padding: 0 20px;
    box-sizing: border-box;
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
        white-space: nowrap;
        li a{
            font-size:1em ;
            color: #fff;
            @media (max-width:1000px) {
                font-size:0.6em ;
                padding:14px 3px;
            }
        }
    }
    .logo {
        background: #fff;
        border-radius: 100%;
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
export const Banner = styled.div`
    min-width: 100%;
    max-width: 1920px;
    display: flex;
    position: relative;
    margin-bottom: ${props => props.mb ? `38%`:"0"};
    .container {
        width: 100%;
        background-image: url(${props => props.img});
        background-position: top;
        background-size: 100%;
        background-repeat: no-repeat;
        min-height: ${props => props.pos == "absolute" ? "720px":"720px" };
        position: ${props => props.pos};
    }

`;
export const ProductsTienda = styled.div`

        width: 100%;
        display: flex;
        flex-wrap: wrap;
        max-width: 1600px;
        margin: 0 auto;
        background-color: ${props => props.bgColor ? props.bgColor:""};
        padding: ${props => props.bgColor ? "5%":"5%"};
        padding-bottom: ${props => props.pb ? "50px":""};
        border-bottom: ${props => props.pb ? "":"10px solid #fbd442"};
        box-sizing: border-box;
        &:after{
            content:"";
            //display:${props => props.pb ? "flex":""}; 
        }

`;
export const Recomendado = styled.div`
    position: absolute;
    background: #ff9831;
    float: left;
    box-sizing: border-box;
    padding: 3%;
    text-align: center;
    font-size: 1.3em;
    color: #fff;
    top: 10%;
    left: 0;
    max-width: 200px;
    width: 100%;
    display: flex;
    justify-content: start;
    clip-path: polygon(0 0, 85% 0, 100% 100%, 0% 100%);
    clip-path: polygon(0 0, 75% 0%, 87% 50%, 75% 100%, 0 100%, 0% 50%);
`;
export const ContactS = styled.div`
    color: #fff;
    width: 100%;
    display: flex;
    background: #f19733;
    .contacto-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-left: 5%;
}
.contacto-header {
    min-height: 150px;
    display: flex;
    align-items: center;
}
.contacto-body {
    width: 100%;
    display: flex;
    justify-content: space-between;
    min-height: 600px;
}
.contacto-body-form {
    width: 45%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: start;
    
    justify-content: center;
    box-sizing: border-box;
    margin-right: 5%;
}
.contacto-img {
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 5%;
    
    img {
        width: 100%;
    }
}
.form-group {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    margin:10px 0;
    button {
        width: 20%;
        height: 59px;
        background: transparent;
        color: #fff;
        border: 1px solid #fff;
        transition: all 0.3s;
        &:hover {
            color: #f19733;
            background: #fff;
            transition: all 0.3s;
        }
    }
    input {
        width: 100%;
        height: 50px;
        box-sizing: border-box;
        background: transparent;
        color: #fff;
        border: none;
        border-bottom: 1px solid #fff;
        padding-left: 10px;
        padding-right: 10px;
    outline: none;
    
    &::placeholder{
        color: #fff;
        opacity: 1;
    }
}
textarea {
    width: 100%;
    resize: none;
    background: transparent;
    color: #fff;
    border: none;
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 10px;
    background-attachment: local;
    background-image: linear-gradient(to right, transparent 10px, transparent 10px), linear-gradient(to left, transparent 10px, transparent 10px), repeating-linear-gradient(transparent , transparent 30px, #fff 30px, #fff 31px, white 31px);
    line-height: 31px;
    height: 200px;
    outline: none;
    scrollbar-color: #fff #fff;
    &::placeholder{
        color: #fff;
        opacity: 1;
    }
}

}
.contacto-header-title {
    width: 100%;
    display: flex;
    p {
    font-size: 4em;
    color: #fff;
}   
}
`;
export const LoadingS = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 9;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:9999;
    transition: all 1s;
`;
export const LoadingSmall = styled.div`
    width: 100%;
    height: 50vh;
    position: relative;
    z-index: 9;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:9999;
    transition: all 1s;
`;
export const CartDat = styled.div`
.cart-header {
    width: 100%;
    height: 60px;
    background: #fbd23a;
    color: #0000;
}
.cart-content {
    width: 100%;
    display: flex;
    flex-direction: column;
}
.cart-logo {
    width: 100%;
    img {
        max-width: 100px;
    }
}

.cart-items-container {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 0 50px;
}
.cart-items {
    width: 60%;
    display: flex;
    flex-direction: column;
}
.cart-info {
    width: 40%;
}
.cart-info-title {
    width: 80%;
    background: #3599ed;
    margin-bottom: 5px;
    color: #fff;
    font-size: 1.5em;
    display: flex;
    justify-content: center;
    margin-left: auto;
}
.cart-info-content {
    width: 80%;
    margin-left: auto;
    display: flex;
    flex-direction: column;
}
.cart-info-data {
    display: flex;
    justify-content: start;
    text-align: left;
}
.cart-info-data-item {
    width: 80%;
    margin: 15px auto;
    display: flex;
    flex-flow: column;
    gap: 15px;
}
.cart-info-payment {
    color: #3599ed;
}
.cart-item {
    display: flex;
    flex-direction: column;
}
.cart-item {
        display: flex;
        height: 300px;
        overflow-y: auto;
        margin-bottom: 25px;
}
.cart-logo {
    width: 100%;
    margin: 40px 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    a{
        color: #000;
    }
}
.cart-title {
    width: 80%;
    background: #f08b3a;
    margin-bottom: 5px;
    color: #fff;
    font-size: 1.5em;
    display: flex;
    box-sizing: border-box;
    padding-left: 35px;
}
`;
export const CartItem = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 10px 0;
    gap: 10px;
    .img{
        background: url(${props => props.bg ? `https://oasistienda.com/uploads/multimedia/${props.bg}`:""}) ;
        width: 100%;
        height: 100px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 100%;
        width: 100px; 
    }
    .name {
        width: 300px;
        display: flex;
        justify-content: center;
        font-size:0.8em;
    }
    
    .cart-item-remove {
        width: 25px;
        height: 25px;
        cursor: pointer;
        button {
            width: 100%;
            height: 100%;
            border: none;
            background: none;
            cursor: pointer;
            position:relative;
            display: flex;
            justify-content: center;
            align-items: center;
            &:before{
                content: '';
                position: absolute;
                left: 0;
                width: 100%;
                height: 100%;
                background: url("/assets/img/tacha.png");
                background-position: center;
                background-size: 100%;
                background-repeat: no-repeat;
            }
        }
    }
    .price {
        display: flex;
        flex-direction: column;
        margin: 0 20px;
        gap: 5px;
        width: 100px;
    }
    .cant {
        display: flex;
        gap: 15px;
        span {
            margin: 0 15px;
            text-align: center;
            border: none;
        }
    }
    .total {
        width: 25%;
        display: flex;
        justify-content: end;
    }
    .add{
        
            width: 15px;
            height: 15px;
            border: none;
            background: none;
            cursor: pointer;
            position:relative;
            display: flex;
            justify-content: center;
            align-items: center;
            &:before{
                content: '';
                position: absolute;
                left: 0;
                width: 100%;
                height: 100%;
                background: url("/assets/img/PALOMITA.png");
                background-position: center;
                background-size: contain;
                background-repeat: no-repeat;
        }
        
    }
    .remove{
        
        width: 15px;
        height: 15px;
        border: none;
        background: none;
        cursor: pointer;
        position:relative;
        display: flex;
        justify-content: center;
        align-items: center;
        &:before{
            content: '';
            position: absolute;
            left: 0;
            width: 100%;
            height: 100%;
            background: url("/assets/img/PALOMITA.png");
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            transform: rotate(180deg);
    }
    
}
`
export const NotifyS = styled.div`
    position: fixed;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 5px;
    top: 15%;
    background: #f03a3a;
    z-index: 99999;
    color: #fff;
    box-sizing: border-box;
    padding: 0 20px;
    margin: 0 auto;
    gap:10px;
    i{
        font-size:1.5em;
    }
`;
export const CartFooter = styled.div`
width: 100%;
display: flex;
hr{
    width: 100%;
}
.footer-info {
    display: flex;
    width: 100%;
    flex-direction: column;
    
}
.footer-cont{
    width: 100%;
    display: flex;
    align-items: center;
}
.footer-data {
    display: flex;
    width: 20%;
    flex-direction: column;
    align-items: end;
    gap: 8px;
    hr{
        background:transparent;
        color:transparent;
        border-color: transparent;
    }
    b {
        display: flex;
        gap:1px;
    }
}
.footer-cont2 {
    display: flex;
    flex-flow: column;
    gap: 5px;
    margin-bottom: 10px;
    width: 80%;
}
.cart-btn {
    display: flex;
    justify-content: center;
    align-items: center;
}
.footer-saldo {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 80%;
}
.footer-saldo-info {
    display: flex;
    gap: 5px;
}
h4 {
    margin: 0;
    padding: 0;
}
p {
    margin: 0;
}
.footer-saldo-amount-pay {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 7px;
}
.amout-pay-i {
    display: flex;
    input {
        max-width: 70px;
    }
}
.footer-cont-info {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 8px;
    background:url("/assets/img/OLAS.png");
}
`;

export const CartBtn = styled.button`
    width: 50%;
    background: #4393ce;
    color: #fff;
    border: 1px solid #fff;
    box-sizing: border-box;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 1.5em;
    text-transform: uppercase;
 
`