import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";

function App() {
  return (
    <BrowserRouter>
      <Navbar variant={"dark"} bg={"dark"} expand={"sm"}>
        <Container>
          <Navbar.Brand href="/">Moody Socials</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            <Button variant="primary">Login</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className={"mt-3 mb-3"}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
