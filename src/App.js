import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Oasis from './components/Tienda/Oasis';
import LoginTest from './components/Tienda/LoginTest';
import ViewProduct from './components/Tienda/ViewProduct';
import Header from './components/Tienda/Header';

function App() {
  const test = () =>{
    Notification.requestPermission().then(perm =>{
      //alert(perm);
      if(perm === "granted"){
          new Notification("Example");
      }
    });
  }
  return (
    <div className="App">
   
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
