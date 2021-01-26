import { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ROUTES } from "./constants";
import { Home } from "./Home";
import { About } from "./About";
import { Login } from "./Login";
import { Register } from "./Register";
import { ManageSocialProfiles } from "./ManageSocialProfiles";
import { Account } from "./Account";
import { NotFound } from "./NotFound";
import {
  deleteAccount,
  getStoredUserData,
  login,
  logout,
  register,
} from "./provider";

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

  async function onDelete(username) {
    await deleteAccount(username);
    // TODO: if the user is currently on a guarded route then take him home
  }

  return (
    <BrowserRouter>
      <Navbar variant={"dark"} bg={"dark"} expand={"sm"}>
        <Container>
          <Navbar.Brand href={ROUTES.HOME}>Moody Socials</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href={ROUTES.HOME}>Home</Nav.Link>
              <Nav.Link href={ROUTES.ABOUT}>About</Nav.Link>
            </Nav>

            {!userData && (
              <Button variant="primary" href={ROUTES.LOGIN}>
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
                  <NavDropdown.Item href={ROUTES.ACCOUNT}>
                    Account
                  </NavDropdown.Item>
                  <NavDropdown.Item href={ROUTES.MANAGE_SOCIAL_PROFILES}>
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
          <Route exact path={ROUTES.HOME}>
            <Home />
          </Route>
          <Route path={ROUTES.ABOUT}>
            <About />
          </Route>
          <Route path={ROUTES.LOGIN}>
            <Login onLogin={onLogin} />
          </Route>
          <Route path={ROUTES.REGISTER}>
            <Register onRegister={onRegister} />
          </Route>
          <Route path={ROUTES.MANAGE_SOCIAL_PROFILES}>
            <ManageSocialProfiles />
          </Route>
          <Route path={ROUTES.ACCOUNT}>
            <Account username={userData?.username} onDelete={onDelete} />
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
