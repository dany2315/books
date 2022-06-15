import React from 'react'

import Book from '../component/book/book';
import { Container,Row,Col } from 'react-bootstrap';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import ManageBook from '../component/ManageBook';


export default function Home() {
  return (
    <>

    <h1  style={{textAlign:"center"}}>Manage book</h1>
    <ManageBook />
    

    <Container>
        <Row className="justify-content-md-center">
        <Col md="auto">
          <Book/>
        </Col>
        </Row>
    </Container> 
    
  </>
  )
}
