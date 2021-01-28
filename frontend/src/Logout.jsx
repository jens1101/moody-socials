import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router-dom";
import { ROUTES } from "./constants";

export function Logout({ onLogout = () => {} }) {
  const history = useHistory();

  useEffect(() => {
    Promise.resolve(onLogout()).then(() => history.push(ROUTES.HOME));
  }, [history, onLogout]);

  return (
    <Container>
      <h1>Logout</h1>

      <p>Logging you out. Please wait...</p>
    </Container>
  );
}
