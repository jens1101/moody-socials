import { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);

  function onLogin(event) {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  }

  return (
    <Container className={"text-center"}>
      <Card bg={"light"}>
        <Card.Body>
          <Card.Title>
            <h1>Login</h1>
          </Card.Title>

          <Form onSubmit={onLogin} noValidate validated={validated}>
            <div className={"text-left"}>
              <Form.Group controlId={"loginUsername"}>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type={"text"}
                  required
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </Form.Group>

              <Form.Group controlId={"loginPassword"}>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type={"password"}
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Form.Group>
            </div>

            <Button variant={"primary"} type={"submit"}>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <p className={"mt-3"}>
        Don't have an account yet? <a href={"/register"}>Register</a>
      </p>
    </Container>
  );
}
