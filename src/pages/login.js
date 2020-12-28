import React, { useState } from "react";
import { Form, Button, Col, Container, Row } from "react-bootstrap";
import { FaLock } from "react-icons/fa";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const setData = () => {
    console.log("test");
    const user = { email: email, password: password };

    axios
      .post("http://localhost:5000/users/login", user)
      .then((res) => {
        console.log(res.data.user);
      })
      .catch((err) => {
        console.log(user.email + " " + user.password);
      });
  };

  return (
    <div style={{ paddingTop: "4rem" }}>
      <Form>
        <Container fluid>
          <Row>
            <Col xs={{ span: 4, offset: 4 }}>
              <FaLock size={23} />
            </Col>
          </Row>
          <Row>
            <Col sm={{ span: 4, offset: 4 }}>
              <label style={{ fontSize: "2rem" }}> Login </label>
            </Col>
          </Row>

          <Row>
            <Col sm={{ span: 4, offset: 4 }}>
              <Form.Group controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(text) => {
                    setEmail(text);
                  }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={{ span: 4, offset: 4 }}>
              <Form.Group controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(text) => {
                    setPassword(text);
                  }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={{ span: 4, offset: 4 }}>
              <Form.Group id="formNoAccount">
                <a href="http://localhost:3000/signup">
                  Don't have an account?
                </a>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={{ span: 4, offset: 4 }}>
              <Button variant="primary" type="submit" onSubmit={setData}>
                Log in
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
};

export default Login;
