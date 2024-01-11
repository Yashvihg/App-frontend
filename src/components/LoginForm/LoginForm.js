import React from "react";
import { useForm } from "react-hook-form";
import { Row, Button, Form, Col } from "react-bootstrap";
import "./LoginForm.css";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  //   const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   const onSubmit: SubmitHandler = (async) => {
  //     console.log("DATA", data);
  //     navigate("/");
  //   };

  const onSubmit = (data) => console.log(data);

  return (
    <Form className="LoginFormContainer" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-4" controlId="formLoginEmail">
        <Form.Label className="fw-bold">Email address</Form.Label>
        <Form.Control
          {...register("email", { required: "This is required" })}
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          Your email is safe with us!
        </Form.Text>
        <p role="alert">
          {errors.email && (
            <span className="text-danger">Please enter a valid email ID!</span>
          )}
        </p>
      </Form.Group>
      <Form.Group className="mb-4" controlId="formLoginPassword">
        <Form.Label className="fw-bold">Password</Form.Label>
        <Form.Control
          {...register("password", { required: "This is required" })}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      {(errors.email || errors.password) && (
        <span className="text-danger">All Fields are required!</span>
      )}
      <Button className="mt-3" variant="primary" type="submit">
        LOGIN
      </Button>

      <Row>
        <Col className="p-3">
          Don't have an account?{" "}
          <span className="fw-bold">
            <Link to="/signup">Sign Up</Link>
          </span>
        </Col>
      </Row>
    </Form>
  );
}

export default LoginForm;
