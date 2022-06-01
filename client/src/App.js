import React from 'react';

import Book from './component/book/book';
import { Container,Row,Col } from 'react-bootstrap';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { BrowserRouter as Router, Route,Switch } from "react-router-dom"
import Nav from './service/nav';
import modal_add_book from './modal/Modal_add_book';

function App() {




  return (
    <>
    <h1  style={{textAlign:"center"}}>Manage book</h1>
      <Router>
          <Nav/>
          <Switch>
          <Route path="/client/src/modal/modal_add_book" exact component={modal_add_book}/>
          <Route path="/client/src/App" exact component={App}/>
          </Switch>
          
      </Router>

      
      <hr></hr>
    <Container>
        <Row className="justify-content-md-center">
        <Col md="auto">
          <Book/>
        </Col>
        </Row>
    </Container> 

 
    
    </>
  );
}

export default App;
