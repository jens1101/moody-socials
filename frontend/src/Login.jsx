import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useHistory, useLocation } from "react-router-dom";
import { ROUTES } from "./constants";

export function Login({ onLogin = async () => {} }) {
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: ROUTES.HOME } };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(false);

  async function onSubmit(event) {
    setValidated(true);
    event.preventDefault();

    if (!event.currentTarget.checkValidity()) {
      return;
    }

    setDisableSubmit(true);

    try {
      await onLogin({ username, password });

      setDisableSubmit(false);
      history.replace(from);
    } catch (e) {
      setDisableSubmit(false);
      setErrorMessage(e.message);
    }
  }

  return (
    <Container className={"text-center"}>
      <Card bg={"light"}>
        <Card.Body>
          <Card.Title>
            <h1>Login</h1>
          </Card.Title>

          <Form onSubmit={onSubmit} noValidate validated={validated}>
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

            {errorMessage && (
              <Alert
                variant="danger"
                onClose={() => setErrorMessage("")}
                dismissible
                className={"text-left"}
              >
                <Alert.Heading>Login Error</Alert.Heading>
                <p>
                  An error occurred while attempting to log you in. This error
                  message was provided:
                </p>

                <blockquote className="blockquote">
                  <p className="mb-0">{errorMessage}</p>
                </blockquote>
              </Alert>
            )}

            <Button
              variant={"primary"}
              type={"submit"}
              disabled={disableSubmit}
            >
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <p className={"mt-3"}>
        Don't have an account yet? <Link to={ROUTES.REGISTER}>Register</Link>
      </p>
    </Container>
  );
}
