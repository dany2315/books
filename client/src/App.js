import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { BrowserRouter as Router, Route,Switch } from "react-router-dom"
import Home from './Pages/Home.jsx'
import Products from './Pages/Products.jsx'
import ModalAddBook from './modal/ModalAddBook';
import logo from './assets/logo/ncs-logo.png'



function App() {


  return (
    <>
    <div className=''   style = {{display: "flex" , justifyContent: "row"}}>
      <div className='div-logo'>
      <img  src= {logo} alt=""  />
      </div>
    
    <h1  style={{textAlign:"center"}}>Manage book</h1>
    
    </div>
    
      <Router>
          <Switch>
            <Route path="/modal-open" exact component={ModalAddBook}/>
            <Route path="/mes-produits" exact component={Products}/>
            <Route path="/" exact component={Home}/>
          </Switch>
      </Router>    
    </>
  );
}

export default App;
