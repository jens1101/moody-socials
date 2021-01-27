import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export function Feed() {
  return (
    <div>
      {/* Feed header with filters*/}
      <Card bg={"light"} style={{ borderRadius: "0" }}>
        <Card.Body>
          <Container>
            <DropdownButton title="Mood">
              <Dropdown.Item as="button">Positive</Dropdown.Item>
              <Dropdown.Item as="button">Neutral</Dropdown.Item>
              <Dropdown.Item as="button">Negative</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item as="button">None</Dropdown.Item>
            </DropdownButton>
          </Container>
        </Card.Body>
      </Card>

      {/* Actual feed */}
      <div>{/* TODO: add actual feed here */}</div>
    </div>
  );
}
