import { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Login } from "./Login";
import { Register } from "./Register";
import { Logout } from "./Logout";
import { getStoredUserData, login, register } from "./provider";

function App() {
  const [userData, setUserData] = useState(getStoredUserData());

  async function onRegister({ username, password }) {
    setUserData(await register({ username, password }));
  }

  function onLogin({ username, password }) {
    setUserData(login({ username, password }));
  }

  /**
   * Callback that gets triggered when the user logs out. This re-fetches the
   * locally stored user data (which should be `null` if the logout was
   * successful). This is necessary since this `App` component doesn't re-render
   * when routes change.
   */
  function onLogout() {
    setUserData(getStoredUserData());
  }

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

            {!userData && (
              <Button variant="primary" href={"/login"}>
                Login
              </Button>
            )}

            {userData && (
              <Nav>
                <NavDropdown
                  title={"Profile"}
                  id={"main-nav-profile"}
                  alignRight={true}
                >
                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="/manage-profile">
                    Manage Social Media Profiles
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className={"mt-5 mb-5"}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login onLogin={onLogin} />
          </Route>
          <Route path="/register">
            <Register onRegister={onRegister} />
          </Route>
          <Route path="/logout">
            <Logout onLogout={onLogout} redirectPath={"/home"} />
          </Route>
          <Route path="*">
            {/* Use the homepage as a fallback route */}
            <Home />
          </Route>
          {/* TODO: add a guard here to prevent accessing routes when you are not logged in */}
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
