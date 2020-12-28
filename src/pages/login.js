import React from "react";
import { Form, Button, Col, Container, Row } from "react-bootstrap";
import { FaLock } from "react-icons/fa";
import axios from 'axios';


export default function login() {

  axios
    .post('http://localhost:5000/users/login')
    .then((response) => {

    })
    .catch((error) => {
      
    })
  return (
    <div style={{ paddingTop: "4rem" }}>
      <FaLock size={23} />

      <Form>
        <label style={{ fontSize: "2rem" }}> Login </label>
        <Container>
          <Row>
            <Col sm={{ span: 4, offset: 4 }}>
              <Form.Group controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={{ span: 4, offset: 4 }}>
              <Form.Group controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group id="formNoAccount">
            <a href="">Don't have an account?</a>
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign in
          </Button>
        </Container>
      </Form>
    </div>
  );
}
