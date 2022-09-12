import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import AllUser from "./components/AllUser";
import AddUserForm from "./components/AddUserForm";


function App() {
  const [users, setUsers] = useState([
    // { name: "Nat", gen: 15, email: "nat@example.com", id: "usnlenjfa" },
    // { name: "Nora", gen: 41, email: "norae@gmail .com", id: "uesacshrbhfd" },
  ]);
  const addNewUser = (user) => {
    user.id = Math.random().toString();
    setUsers([...users, user]);
    console.log(user);
  };

  const deleteUser = (id) => {
    setUsers(
      users.filter((user) => (user.id !== id))
    );
  };
  const EditUser = (id, newData) => {
    setUsers(
      users.map((user) => {
        if (user.id === id) {
          return newData;
        }
        return user;
      })
    );
  };
  return (
    <div className="App">
      <>
        <Container style={{ marginTop: "30px" }}>
          <Row>
            <Col>
              <AddUserForm newUser={addNewUser} />
            </Col>
            <Col>
              <AllUser
                userData={users}
                editUser={EditUser}
                delete={deleteUser}
              />
            </Col>
          </Row>
        </Container>
      </>
    </div>
  );
}

export default App;
