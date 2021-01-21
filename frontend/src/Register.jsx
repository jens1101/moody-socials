import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function Register() {
  return (
    <Container className={"text-center"}>
      <Card bg={"light"}>
        <Card.Body>
          <Card.Title>
            <h1>Register</h1>
          </Card.Title>

          <Form>
            <div className={"text-left"}>
              <Form.Group controlId={"registerUsername"}>
                <Form.Label>Username</Form.Label>
                <Form.Control type={"text"} />
              </Form.Group>

              <Form.Group controlId={"registerPassword"}>
                <Form.Label>Password</Form.Label>
                <Form.Control type={"password"} />
              </Form.Group>

              <Form.Group controlId={"registerConfirmPassword"}>
                <Form.Label>Confirm password</Form.Label>
                <Form.Control type={"password"} />
              </Form.Group>
            </div>

            <Button variant={"primary"} type={"submit"}>
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
