import React , { useState }from "react";
import ModalAddBook from "../../modal/ModalAddBook";
import { Button } from "react-bootstrap";



function Nav() {


    const [IsOpen, setIsOpen] = useState(false)

    return ( 
        <>
        <Button variant="success" 
        onClick={()=> {
            
            {<ModalAddBook IsOpen={IsOpen}/>}
            
        
        }} >Add book</Button>


        
        <Button onClick={()=>{}} variant="success">Filter books</Button>{' '}
        </>
     );
}

export default Nav;