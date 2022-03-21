import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Signup.css";
export default function Signup() {
  return (
    <div id="signup">
      <h1 className="text-center">Signup</h1>
      <Form className="container  ">
        <Form.Group className="mb-3" controlId="validationCustom01">
          <Form.Label>First Name</Form.Label>
          <Form.Control required type="text" placeholder="First name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="validationCustom01">
          <Form.Label>Last Name</Form.Label>
          <Form.Control required type="text" placeholder="Last name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Username</Form.Label>
          <Form.Control required type="email" placeholder="name@gmail.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="enter your password"
            minLength="8"
            pattern="^([@#](?=[^aeiou]{7,13}$)(?=[[:alnum:]]{7,13}$)(?=.*[A-Z]{1,}.*$).+)$"
          />
        </Form.Group>
        <Form.Group controlId="dob">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control required type="date" name="dob" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Gender </Form.Label>{" "}
          <Form.Check
            required
            inline
            label="male"
            name="group1"
            type="radio"
            id={`inline-radio-1`}
          />
          <Form.Check
            inline
            label="Female"
            name="group1"
            type="radio"
            id={`inline-radio-1`}
          />
        </Form.Group>
        <Button type="submit">Signup</Button>{" "}
        <Button as={Link} to="/">
          Cancel
        </Button>
      </Form>
    </div>
  );
}
