import React, {useState} from "react";
import { Button } from "react-bootstrap";
import ModalAddBook from "../modal/ModalAddBook.jsx";

function ManageBook() {

    const [isShowModal, setIsShowModal] = useState(false);

    const openModal = () => {setIsShowModal(true)}

    const handleDelete = () =>{
        setIsShowModal(false);
    }



    return ( 
        <>
        {isShowModal ?
        <>
            <Button variant="success" onClick={() => openModal()} >Add book</Button>
            <Button onClick={()=>{}} variant="success">Filter books</Button>

            <ModalAddBook show={isShowModal} onDelete={handleDelete} />
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

export default ManageBook;