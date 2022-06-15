import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';



function Book() {
    return ( 
        <>
              <Card style={{ width: '17rem' }}>
  
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">info</Button>{' '}
                <Button variant="outline-warning">Primary</Button>{' '}
                <Button variant="danger">Danger</Button>{' '}
                
                
                </Card.Body>
                </Card>
        </>
     );
}

export default Book;