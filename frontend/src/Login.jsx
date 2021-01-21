import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function Login() {
  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title className={"text-center"}>
            <h1>Login</h1>
          </Card.Title>

          <Form>
            <Form.Group controlId={"formBasicEmail"}>
              <Form.Label>Username</Form.Label>
              <Form.Control type={"text"} />
            </Form.Group>

            <Form.Group controlId={"formBasicPassword"}>
              <Form.Label>Password</Form.Label>
              <Form.Control type={"password"} />
            </Form.Group>

            <div className={"text-center"}>
              <Button variant={"primary"} type={"submit"}>
                Submit
              </Button>

              <hr />

              <a href={"/register"}>Register instead</a>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
