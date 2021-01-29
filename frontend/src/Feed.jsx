import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { MOODS } from "./constants";
import { getSocialFeed } from "./provider";

const NO_MOOD = {
  /** @type {string} */
  displayName: "None",
  /** @type {null|string} */
  value: null,
};

export function Feed() {
  const [feed, setFeed] = useState();
  const [showSpinner, setShowSpinner] = useState(false);
  const [mood, setMood] = useState(NO_MOOD);
  const [showError, setShowError] = useState(false);

  const moodsDropdown = (
    <DropdownButton title={mood.displayName}>
      {MOODS.map((mood) => (
        <Dropdown.Item as="button" onSelect={() => setMood(mood)}>
          {mood.displayName}
        </Dropdown.Item>
      ))}
      <Dropdown.Divider />
      <Dropdown.Item as="button" onSelect={() => setMood(NO_MOOD)}>
        {NO_MOOD.displayName}
      </Dropdown.Item>
    </DropdownButton>
  );

  useEffect(() => {
    setShowSpinner(true);

    getSocialFeed(mood.value)
      .then(setFeed)
      .catch((error) => {
        console.error(error);
        setShowError(true);
      })
      .finally(() => setShowSpinner(false));
  }, [mood.value]);

  return (
    <div>
      {/* Feed header with filters*/}
      <Card bg={"light"} style={{ borderRadius: "0" }}>
        <Card.Body>
          <Container>
            <div className={"d-flex align-items-center"}>
              <div className={"mr-auto"}>{moodsDropdown}</div>
              <Spinner
                animation="border"
                role="status"
                variant={"primary"}
                className={showSpinner ? "visible" : "invisible"}
              >
                <span className="sr-only">Loading...</span>
              </Spinner>
            </div>
          </Container>
        </Card.Body>
      </Card>

      {/* Actual feed */}
      <Container className={"my-3"}>
        {!showError && JSON.stringify(feed)}
        {showError && (
          <Alert variant="danger">
            <Alert.Heading>Error Retrieving Social Feed</Alert.Heading>
            <p>An error occurred while retrieving your social feed</p>
            <Button
              variant={"primary"}
              onClick={() => {
                setShowSpinner(true);
                setShowError(false);

                getSocialFeed(mood.value)
                  .then(setFeed)
                  .catch((error) => {
                    console.error(error);
                    setShowError(true);
                  })
                  .finally(() => setShowSpinner(false));
              }}
            >
              Retry
            </Button>
          </Alert>
        )}
      </Container>
    </div>
  );
}
