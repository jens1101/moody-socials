import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export function Account({ username, onDelete }) {
  const [disableDeleteAccount, setDisableDeleteAccount] = useState(false);
  const [deleteAccountError, setDeleteAccountError] = useState("");

  return (
    <Container>
      <h1>My Account</h1>
      <small className="text-muted">Logged in as {username}</small>

      <hr />

      <a href={"/edit-password"}>
        <p>Edit Password</p>
      </a>

      <a href={"/manage-social-profiles"}>
        <p>Manage Social Media Profiles</p>
      </a>

      <hr />

      <Button
        variant="danger"
        disabled={disableDeleteAccount}
        onClick={async () => {
          setDisableDeleteAccount(true);

          try {
            await onDelete(username);
          } catch (e) {
            setDeleteAccountError(e.message);
          } finally {
            setDisableDeleteAccount(false);
          }
        }}
      >
        Delete My Account
      </Button>

      {deleteAccountError && (
        <Alert
          variant="danger"
          onClose={() => setDeleteAccountError("")}
          dismissible
          className={"text-left"}
        >
          <Alert.Heading>Delete Account Error</Alert.Heading>
          <p>
            An error occurred while attempting to delete your account. This
            error message was provided:
          </p>

          <blockquote className="blockquote">
            <p className="mb-0">{deleteAccountError}</p>
          </blockquote>
        </Alert>
      )}
    </Container>
  );
}
