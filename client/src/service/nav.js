import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal_add_book from "../modal/Modal_add_book";

function nav() {
    return ( 
        <>
        <Link to="/client/src/modal/modal_add_book">
        <Modal_add_book/>
        </Link>


        
        <Button onClick={()=>{}} variant="success">Filter books</Button>{' '}
        </>
     );
}

export default nav;