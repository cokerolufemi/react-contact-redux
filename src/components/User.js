import React from "react";
import { Card, Col, Button, Modal } from "react-bootstrap";
import AllNewForm from "./AllNewForm";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../actions/userActions";

function User(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const hadleDelete = (e) => {
    e.preventDefault();
    // props.delete(props.userBio.id);
    dispatch(deleteUser(props.userBio.id));
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AllNewForm userBio={props.userBio} hide={handleClose}/>
        </Modal.Body>
      </Modal>

      <Col md={3} style={{ width: "12rem", marginBottom: "10px" }}>
        <Card>
          <Card.Body>
            <Card.Title>Name:{props.userBio.name}</Card.Title>
            <Card.Subtitle className="mb=2 text-muted">
              Email:{props.userBio.email}
            </Card.Subtitle>
            <Card.Text>Gen:{props.userBio.gen}</Card.Text>
            <Button href="#" size="sm" variant="primary" onClick={handleShow}>
              Edit
            </Button>

            <Button href="#" size="sm" variant="danger" onClick={hadleDelete}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default User;
