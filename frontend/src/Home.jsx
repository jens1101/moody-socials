import Container from "react-bootstrap/Container";
import { Feed } from "./Feed";

export function Home() {
  return (
    <>
      <Container>
        <h1>Feed</h1>
      </Container>

      <Feed />
    </>
  );
}
