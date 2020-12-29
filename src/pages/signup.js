import React, { useState } from "react";
import { Form, Button, Col, Container, Row } from "react-bootstrap";
import { FaLock } from "react-icons/fa";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const setData = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/users/signup", {
        email: email,
        password: password,
      })
      .then((res) => {
        window.location = "/page";
      })
      .catch((err) => {});
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
              <label style={{ fontSize: "2rem" }}> Sign Up </label>
            </Col>
          </Row>

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

          <Row>
            <Col sm={{ span: 4, offset: 4 }}>
              <Form.Group controlId="formGridConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={{ span: 4, offset: 4 }}>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="I agree to the Terms and Conditions"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={{ span: 4, offset: 4 }}>
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
};

export default Signup;
