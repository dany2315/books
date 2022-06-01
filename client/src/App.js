import React from 'react';

import Book from './component/book/book';
import { Container,Row,Col } from 'react-bootstrap';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { BrowserRouter as Router, Route,Switch } from "react-router-dom"
import Home from './Pages/Home.jsx'
import Products from './Pages/Products.jsx'

import ModalAddBook from './modal/ModalAddBook';

function App() {

  return (
    <>
    <h1  style={{textAlign:"center"}}>Manage book</h1>
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
