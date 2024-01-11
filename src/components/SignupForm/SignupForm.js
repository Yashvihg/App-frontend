import React from "react";
import { useForm } from "react-hook-form";
import "./SignupForm.css";
import { Row, Button, Form, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function SignupForm() {
  const navigate = useNavigate();
  let email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit: SubmitHandler<SignupInputs> = async (data: SignupInputs) => {
  //     console.log("DATA", data);
  //     const _res = await postSignupUser(data);
  //     if (_res) {
  //       console.log(_res);
  //       alert(`User signed up successfully, welcome ${data.fullName}`);
  //       navigate("/");
  //     }
  //   };

  const onSubmit = (data) => console.log(data);

  return (
    <Form className="SignupFormContainer" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-4" controlId="formBasicName">
        <Form.Label className="fw-bold">Full Name</Form.Label>
        <Form.Control
          {...register("fullName", { required: "This is required" })}
          type="text"
          placeholder="Enter Full Name"
        />
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label className="fw-bold">Email address</Form.Label>
        <Form.Control
          {...register("email", {
            required: "This is required",
            pattern: email_regex,
          })}
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        <p role="alert">
          {errors.email && (
            <span className="text-danger">Please enter a valid email ID!</span>
          )}
        </p>
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Label className="fw-bold">Password</Form.Label>
        <Form.Control
          {...register("password", {
            required: "This is required",
            minLength: 4,
          })}
          type="password"
          placeholder="Password"
        />
        {(errors.email || errors.fullName || errors.password) && (
          <span className="text-danger">
            All Fields are Mandatory to Signup.
          </span>
        )}
      </Form.Group>

      <Button className="mt-2" variant="primary" type="submit">
        SIGN UP
      </Button>
      <Row>
        <Col className="p-3">
          Already have an account?{" "}
          <span className="fw-bold">
            <Link to="/login">Log In</Link>
          </span>
        </Col>
      </Row>
    </Form>
  );
}

export default SignupForm;
