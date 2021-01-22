import { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useHistory } from "react-router-dom";

export function Register({ onRegister = async () => {} }) {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(false);

  async function onSubmit(event) {
    const form = event.currentTarget;

    setValidated(true);
    event.preventDefault();
    setDisableSubmit(true);

    if (form.checkValidity()) {
      try {
        await onRegister({ username, password });

        history.push("/home");
      } catch (e) {
        setErrorMessage(e.message);
      }
    }

    setDisableSubmit(false);
  }

  return (
    <Container className={"text-center"}>
      <Card bg={"light"}>
        <Card.Body>
          <Card.Title>
            <h1>Register</h1>
          </Card.Title>

          <Form onSubmit={onSubmit} noValidate validated={validated}>
            <div className={"text-left"}>
              <Form.Group controlId={"registerUsername"}>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  required
                  type={"text"}
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </Form.Group>

              <Form.Group controlId={"registerPassword"}>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type={"password"}
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setConfirmPassword("");
                  }}
                />
              </Form.Group>

              <Form.Group controlId={"registerConfirmPassword"}>
                <Form.Label>Confirm password</Form.Label>
                <Form.Control
                  required
                  type={"password"}
                  value={confirmPassword}
                  isValid={false}
                  onChange={(event) => {
                    const inputElement = event.target;

                    setConfirmPassword(inputElement.value);

                    // This uses the constraint validation API to set this field
                    // as either valid or invalid.
                    inputElement.setCustomValidity(
                      inputElement.value !== password
                        ? "Passwords don't match"
                        : ""
                    );
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Passwords don't match
                </Form.Control.Feedback>
              </Form.Group>
            </div>

            {errorMessage && (
              <Alert
                variant="danger"
                onClose={() => setErrorMessage("")}
                dismissible
                className={"text-left"}
              >
                <Alert.Heading>Registration Error</Alert.Heading>
                <p>
                  An error occurred while attempting to register you. This error
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
        Already have an account? <a href={"/login"}>Login</a>
      </p>
    </Container>
  );
}
