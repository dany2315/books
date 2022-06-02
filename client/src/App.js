import React from 'react';
import Book from './component/book/book';

import  'bootstrap/dist/css/bootstrap.min.css' ;
import { BrowserRouter as Router, Route,Switch } from "react-router-dom"

import ModalAddBook from './modal/ModalAddBook';
import Home from './pages/Home';


function App() {




  return (
    <>
    <h1  style={{textAlign:"center"}}>Manage book</h1>
      <Router>
          
          <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/modal" exact component={ModalAddBook}/>
          </Switch>
          
      </Router>

      
    

 
    
    </>
  );
}

export default App;
