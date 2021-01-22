import Container from "react-bootstrap/Container";

export function Account({ username }) {
  return (
    <Container>
      <h1>My Account</h1>
      <small className="text-muted">Logged in as {username}</small>
    </Container>
  );
}
