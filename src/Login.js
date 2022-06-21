import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./components/Login.css";
import Register from "./Register";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleLogin(event) {
    event.preventDefault();
    const data = JSON.stringify({ email, password });
    const response = await fetch("/checkUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
    if (!response.ok) {
      console.error(`Unable to check ${data}`);
    } else {
      return response;
    }
  }

  function handleRegister(event) {
    event.preventDefault();
  }

  return (
    <div className="MainLogin">
      <div className="Login">
        <Form onSubmit={handleLogin}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block="true" size="lg" type="submit" disabled={!validateForm()}>
            Login
          </Button>
        </Form>
      </div>
      <div className="Register">
        <Form onSubmit={handleRegister}>
          <Form.Group size="lg" controlId="emailRegister">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="passwordRegister">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block="true" size="lg" path="/register" element={<Register />}>
            Sign Up
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login