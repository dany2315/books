import React from 'react'
import Book from '../component/book/book';
import Nav from '../component/Nav/Nav';
import { Container,Row,Col } from 'react-bootstrap';
import  'bootstrap/dist/css/bootstrap.min.css' ;







function Home() {
  return (
    <>
    <div>
        
      <Nav/>
       
       <hr/>

        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto">
                  <Book/>
                </Col>
            </Row>
        </Container> 
        
       

        </div>
    </>
  )
}

export default Home
