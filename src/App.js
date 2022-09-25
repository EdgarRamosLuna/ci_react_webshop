import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import React, { useState, useEffect } from 'react';

import Oasis from './components/Tienda/Oasis';
import LoginTest from './components/Tienda/LoginTest';
import ViewProduct from './components/Tienda/ViewProduct';
import Header from './components/Tienda/Header';
import { LoadingS } from './styles/Home';

function App() {
  const [loading, setLoading] = useState(true);
  const test = () =>{
    Notification.requestPermission().then(perm =>{
      //alert(perm);
      if(perm === "granted"){
          new Notification("Example");
      }
    });
  }
  useEffect(() => {
    setTimeout(() => {
          
      setLoading(false);
    }, 1000);
  
    return () => {
      
    }
  }, [])
  /*useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);*/
  return (
    <div className="App">
      {loading && <LoadingS style={{opacity:`${loading ? 0:1}`}}><img src='assets/img/loading.svg'  /></LoadingS>}
      {/*<LoadingS style={{opacity:`${loading ? 1:0}`, zIndex:`${loading ? 0:-1}`}}><img src={loading && `assets/img/loading.svg`}  /></LoadingS>*/}
      <Routes>
            <Route path="/" element={<Oasis/>} />
            <Route path="/login" element={<LoginTest/>} />
            <Route exact path="productos/ver" element={<Header />}>
              <Route exact path=":idpro" element={<ViewProduct />} />
            </Route>
      </Routes>
      
      {/*<header className="App-header">
          <button onClick={test}>
            Notify
          </button>
          <Link to="/home">Oasis</Link>
          
      </header>*/}
    </div>
  );
}

export default App;
