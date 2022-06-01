import React from 'react'

import Book from '../component/book/book';
import { Container,Row,Col } from 'react-bootstrap';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Nav from '../component/Nav';


export default function Home() {
  return (
    <>
    <Nav />
    <hr></hr>

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
