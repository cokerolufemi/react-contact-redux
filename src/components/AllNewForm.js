import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { editUser } from "../actions/userActions";

function AllNewForm(props) {
  const [name, setName] = useState(props.userBio.name);
  const [gen, setGen] = useState(props.userBio.gen);
  const [email, setEmail] = useState(props.userBio.email);
  const [id, setId] = useState(props.userBio.id);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // props.editUser(id, { name, email, gen });
    const items = {
      //   id: props.userBio.id,
      name,
      email,
      gen,
    };
    dispatch(editUser(items, props.userBio.id));
    setName("");
    setGen("");
    setEmail("");
    setId("");
    props.hide();
  };
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Gen</Form.Label>
          <Form.Control
            type="text"
            placeholder="Password"
            value={gen}
            onChange={(e) => {
              setGen(e.target.value);
            }}
          />
        </Form.Group>

        <Button onClick={handleSubmit} variant="primary" type="submit">
          SUBMIT
        </Button>
      </Form>
    </div>
  );
}

export default AllNewForm;
