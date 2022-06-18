import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "./LayoutUser/HeaderUser.css"


export default function InfoModal() {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
return (
  <>
    <Button className="nextButton" onClick={handleShow}>
        <svg id ="menu" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>MENU</Modal.Title>
      </Modal.Header>
      <Modal.Body>Home</Modal.Body>
      <Modal.Body>Registro de Atividades</Modal.Body>
      <Modal.Body>Instituições</Modal.Body>
      <Modal.Body>Formulário de doações</Modal.Body>
      <Modal.Body>Formulário de atividades</Modal.Body>
      <Modal.Body>Administrador</Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  </>
);
}