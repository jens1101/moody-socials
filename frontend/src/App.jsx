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
import { ManageSocialProfiles } from "./ManageSocialProfiles";
import { Account } from "./Account";
import { NotFound } from "./NotFound";
import { getStoredUserData, login, logout, register } from "./provider";

function App() {
  const [userData, setUserData] = useState(getStoredUserData());
  const [disableLogout, setDisableLogout] = useState(false);

  async function onRegister({ username, password }) {
    setUserData(await register({ username, password }));
  }

  async function onLogin({ username, password }) {
    setUserData(await login({ username, password }));
  }

  async function onLogout() {
    setDisableLogout(true);
    await logout();
    // TODO: if the user is currently on a guarded route then take him home
    setDisableLogout(false);
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
                  title={"Account"}
                  id={"main-nav-account"}
                  alignRight={true}
                >
                  <NavDropdown.Header>
                    Logged in as {userData.username}
                  </NavDropdown.Header>
                  <NavDropdown.Item href="/account">Account</NavDropdown.Item>
                  <NavDropdown.Item href="/manage-social-profiles">
                    Manage Social Media Profiles
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as="button"
                    disabled={disableLogout}
                    onClick={onLogout}
                  >
                    Logout
                  </NavDropdown.Item>
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
          <Route path="/manage-social-profiles">
            <ManageSocialProfiles />
          </Route>
          <Route path={"/account"}>
            <Account username={userData.username} />
          </Route>
          <Route path="*">
            {/* 404 page */}
            <NotFound />
          </Route>
          {/* TODO: add a guard here to prevent accessing routes when you are not logged in */}
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
