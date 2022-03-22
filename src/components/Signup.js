import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Signup.css";
export default function Signup() {
  console.log(Form);
  return (
    <div id="signup" className="container-sm ">
      <h1 className="text-center">Signup</h1>
      <Form>
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
          <Form.Control required type="text" placeholder="Enter Username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>EmailId</Form.Label>
          <Form.Control required type="email" placeholder="name@gmail.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Enter your password"
            minLength="8"

            // pattern="^([@#](?=[^aeiou]{7,13}$)(?=[[:alnum:]]{7,13}$)(?=.*[A-Z]{1,}.*$).+)$"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Enter your password"
            minLength="8"
            // pattern="^([@#](?=[^aeiou]{7,13}$)(?=[[:alnum:]]{7,13}$)(?=.*[A-Z]{1,}.*$).+)$"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="dob">
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
        <Form.Group className="mb-3" controlId="dob">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            required
            type="number"
            minLength="10"
            name="phone number"
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
