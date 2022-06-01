import React, {useState} from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalAddBook from "../modal/ModalAddBook.jsx";

function Nav() {

    const [isShowModal, setIsShowModal] = useState(false);

    const openModal = () => {
        setIsShowModal(true);
    }

    return ( 
        <>
        {isShowModal ?
        <>
            <Button variant="success" onClick={() => openModal()} >
                Add book
            </Button>
            <Button onClick={()=>{}} variant="success">Filter books</Button> 
            <ModalAddBook show={true} />
        </>
        :
        <>
            <Button variant="success" onClick={() => openModal()} >
                Add book
            </Button>
            <Button onClick={()=>{}} variant="success">Filter books</Button> 
        </>
        }
        </>
     );
}

export default Nav;