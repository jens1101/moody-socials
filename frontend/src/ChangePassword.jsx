import { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useHistory } from "react-router-dom";
import { ROUTES } from "./constants";

export function ChangePassword({ onPasswordChange = async () => {} }) {
  const history = useHistory();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
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
      await onPasswordChange({ oldPassword, newPassword });

      setDisableSubmit(false);
      history.push(ROUTES.ACCOUNT);
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
            <h1>Change Password</h1>
          </Card.Title>

          <Form onSubmit={onSubmit} noValidate validated={validated}>
            <div className={"text-left"}>
              <Form.Group controlId={"changePasswordOldPassword"}>
                <Form.Label>Old password</Form.Label>
                <Form.Control
                  required
                  type={"password"}
                  value={oldPassword}
                  onChange={(event) => setOldPassword(event.target.value)}
                />
              </Form.Group>

              <Form.Group controlId={"changePasswordNewPassword"}>
                <Form.Label>New password</Form.Label>
                <Form.Control
                  required
                  type={"password"}
                  value={newPassword}
                  onChange={(event) => {
                    setNewPassword(event.target.value);
                    setConfirmNewPassword("");
                  }}
                />
              </Form.Group>

              <Form.Group controlId={"changePasswordConfirmNewPassword"}>
                <Form.Label>Confirm new password</Form.Label>
                <Form.Control
                  required
                  type={"password"}
                  value={confirmNewPassword}
                  isValid={false}
                  onChange={(event) => {
                    const inputElement = event.target;

                    setConfirmNewPassword(inputElement.value);

                    // This uses the constraint validation API to set this field
                    // as either valid or invalid.
                    inputElement.setCustomValidity(
                      inputElement.value !== newPassword
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
                <Alert.Heading>Change Password Error</Alert.Heading>
                <p>
                  An error occurred while attempting to change your password.
                  This error message was provided:
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
    </Container>
  );
}
