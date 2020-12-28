import React from "react";
import { Form, Button, Col, Container, Row } from "react-bootstrap";
import { FaLock } from "react-icons/fa";

export default function login() {
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
              <Form.Group id="formNoAccount">
                <a href="http://localhost:3000/signup">
                  Don't have an account?
                </a>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={{ span: 4, offset: 4 }}>
              <Button variant="primary" type="submit">
                Sign in
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
}
