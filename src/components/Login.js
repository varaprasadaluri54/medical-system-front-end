import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";
export default function Login() {
  return (
    <div id="login">
      <h1 className="text-center">Welcome</h1>
      <Form className="container ">
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
          />
        </Form.Group>
        <Button type="submit" variant="success">
          Login
        </Button>
        {"  "}
        <Button as={Link} to="/signup">
          Signup
        </Button>
      </Form>
    </div>
  );
}
