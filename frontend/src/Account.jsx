import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link, useHistory } from "react-router-dom";
import { ROUTES } from "./constants";

export function Account({ username, onDelete = () => {} }) {
  const history = useHistory();
  const [disableDeleteAccount, setDisableDeleteAccount] = useState(false);
  const [deleteAccountError, setDeleteAccountError] = useState("");

  return (
    <Container>
      <h1>My Account</h1>
      <small className="text-muted">Logged in as {username}</small>

      <hr />

      <Link to={ROUTES.EDIT_PASSWORD}>
        <p>Edit Password</p>
      </Link>

      <Link to={ROUTES.MANAGE_SOCIAL_PROFILES}>
        <p>Manage Social Media Profiles</p>
      </Link>

      <hr />

      <Button
        variant="danger"
        disabled={disableDeleteAccount}
        onClick={async () => {
          if (
            !window.confirm(
              "Are you sure you want to delete your account and all associated data? " +
                "This cannot be undone."
            )
          ) {
            return;
          }

          setDisableDeleteAccount(true);

          try {
            await onDelete(username);
            setDisableDeleteAccount(false);

            history.push(ROUTES.HOME);
          } catch (e) {
            setDisableDeleteAccount(false);
            setDeleteAccountError(e.message);
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
