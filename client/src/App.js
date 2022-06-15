import React from 'react';
import "./App.css"
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { BrowserRouter as Router, Route,Switch } from "react-router-dom"
import Home from './Pages/Home.jsx'
import Products from './Pages/Products.jsx'
import ModalAddBook from './modal/ModalAddBook';
import logo from './assets/logo/ncs-logo-final.png'
import {FiLogIn} from 'react-icons/fi';
import { IconContext } from "react-icons";

function App() {


  return (
    <>
    <div className=''   style = {{display: "flex" , justifyContent: "space-around", alignItems:"center"}} >

      <div className='div-logo'>
      <img  src= {logo} alt=""  />
      </div>

      <IconContext.Provider value={{className: "global-class-name" , size:"2em"}}  >
        <div>
          <FiLogIn />
        </div>
      </IconContext.Provider>

    </div>
    
    <hr></hr>
      <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/modal-open" exact component={ModalAddBook}/>
            <Route path="/mes-produits" exact component={Products}/>
            
          </Switch>
      </Router>    
    </>
  );
}

export default App;
