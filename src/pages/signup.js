import React, { useState } from "react";
import { Form, Col, Container, Row } from "react-bootstrap";
import { FaLock } from "react-icons/fa";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const setData = (e) => {
    e.preventDefault();

    if (confirmPassword === password && checkbox === true) {
      axios
        .post("http://localhost:5000/users/add", {
          email: email,
          password: password,
          username: username,
        })
        .then((res) => {
          window.location = "/page";
        })
        .catch((err) => {});
    }
  };
  return (
    <div style={{ paddingTop: "4rem" }}>
      <Form onSubmit={setData}>
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
              <Form.Group controlId="formGridUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  placeholder="Enter username"
                  onChange={(text) => {
                    setUsername(text.target.value);
                  }}
                />
              </Form.Group>
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
                    setEmail(text.target.value);
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
                    setPassword(text.target.value);
                  }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={{ span: 4, offset: 4 }}>
              <Form.Group controlId="formGridConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(text) => {
                    setConfirmPassword(text.target.value);
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={{ span: 4, offset: 4 }}>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="I agree to the Terms and Conditions"
                  onChange={() => setCheckbox(true)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={{ span: 4, offset: 4 }}>
              <input
                type="submit"
                value="Sign Up"
                className="btn btn-primary"
              />
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
};

export default Signup;
