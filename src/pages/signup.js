import React, { useState } from "react";
import { Form, Col, Container, Row } from "react-bootstrap";
import { FcLock } from "react-icons/fc";
import homebg from "../assets/iamge.jpg";
import axios from "axios";
import { MDBView } from "mdbreact";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [error, setError] = useState("");
  const [matchPassword, setMatchPassword] = useState("");
  const [clickCheckbox, setClickCheckbox] = useState("");

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
        .catch((err) => {
          setError("There was an error with your email");
        });
    }
    if (confirmPassword !== password) {
      setMatchPassword("Passwords do not match");
    }
    if (checkbox !== true) {
      setClickCheckbox("Please agree to the terms and conditions");
    }
  };
  return (
    <MDBView
      src={homebg}
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div style={{ paddingTop: "4rem" }}>
        <Form onSubmit={setData}>
          <Container fluid>
            <Row>
              <Col xs={{ span: 4, offset: 4 }}>
                <FcLock size={23} />
              </Col>
            </Row>
            <Row>
              <Col sm={{ span: 4, offset: 4 }}>
                <label style={{ fontSize: "2rem", color: "white" }}>
                  {" "}
                  Sign Up{" "}
                </label>
              </Col>
            </Row>
            <Row>
              <Col sm={{ span: 4, offset: 4 }}>
                <Form.Group controlId="formGridUsername">
                  <Form.Label style={{ color: "white" }}>Username</Form.Label>
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
                  <Form.Label style={{ color: "white" }}>Email</Form.Label>
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
                  <Form.Label style={{ color: "white" }}>Password</Form.Label>
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
                  <Form.Label style={{ color: "white" }}>
                    Confirm Password
                  </Form.Label>
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
                    style={{ color: "white" }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={{ span: 4, offset: 4 }}>
                <small
                  style={{
                    color: "red",
                  }}
                >
                  {error}{" "}
                </small>
              </Col>
            </Row>
            <Row>
              <Col sm={{ span: 4, offset: 4 }}>
                <small
                  style={{
                    color: "red",
                  }}
                >
                  {matchPassword}{" "}
                </small>
              </Col>
            </Row>
            <Row>
              <Col sm={{ span: 4, offset: 4 }}>
                <small
                  style={{
                    color: "red",
                  }}
                >
                  {clickCheckbox}{" "}
                </small>
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
    </MDBView>
  );
};

export default Signup;
