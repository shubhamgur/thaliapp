import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Model=()=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="success" onClick={handleShow}>
         Help
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Order Information</Modal.Title>
          </Modal.Header>
          <ul>
            <li>For Order Item Click On Item Name.</li>
            <li>Ones Order Confrom Then Order Can Not Be Cancle.</li>
          </ul>
          <Modal.Footer>
            <Button style={{width:'100px'}} variant="primary" onClick={handleClose}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default Model;