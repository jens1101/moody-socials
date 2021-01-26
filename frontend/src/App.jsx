import { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { ROUTES } from "./constants";
import { PrivateRoute } from "./PrivateRoute";
import { Home } from "./Home";
import { About } from "./About";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { Register } from "./Register";
import { ManageSocialProfiles } from "./ManageSocialProfiles";
import { Account } from "./Account";
import { ChangePassword } from "./ChangePassword";
import { NotFound } from "./NotFound";
import {
  changePassword,
  deleteAccount,
  getStoredUserData,
  login,
  logout,
  register,
} from "./provider";

function App() {
  const [userData, setUserData] = useState(getStoredUserData());

  async function onRegister({ username, password }) {
    setUserData(await register({ username, password }));
  }

  async function onLogin({ username, password }) {
    setUserData(await login({ username, password }));
  }

  async function onLogout() {
    await logout();
    setUserData(getStoredUserData());
  }

  async function onDelete(username) {
    await deleteAccount(username);
    setUserData(getStoredUserData());
  }

  async function onPasswordChange({ oldPassword, newPassword }) {
    await changePassword({ oldPassword, newPassword });
  }

  return (
    <BrowserRouter>
      <Navbar variant={"dark"} bg={"dark"} expand={"sm"}>
        <Container>
          <Navbar.Brand>Moody Socials</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className={"nav-link"} to={ROUTES.HOME}>
                Home
              </Link>
              <Link className={"nav-link"} to={ROUTES.ABOUT}>
                About
              </Link>
            </Nav>

            {!userData && (
              <Link className={"btn btn-primary"} to={ROUTES.LOGIN}>
                Login
              </Link>
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

                  <Link className={"dropdown-item"} to={ROUTES.ACCOUNT}>
                    Account
                  </Link>

                  <Link
                    className={"dropdown-item"}
                    to={ROUTES.MANAGE_SOCIAL_PROFILES}
                  >
                    Manage Social Media Profiles
                  </Link>

                  <NavDropdown.Divider />

                  <Link className={"dropdown-item"} to={ROUTES.LOGOUT}>
                    Logout
                  </Link>
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
          <Route exact path={ROUTES.ABOUT}>
            <About />
          </Route>
          <Route exact path={ROUTES.LOGIN}>
            <Login onLogin={onLogin} />
          </Route>
          <Route exact path={ROUTES.REGISTER}>
            <Register onRegister={onRegister} />
          </Route>
          <PrivateRoute exact path={ROUTES.MANAGE_SOCIAL_PROFILES}>
            <ManageSocialProfiles />
          </PrivateRoute>
          <PrivateRoute exact path={ROUTES.ACCOUNT}>
            <Account username={userData?.username} onDelete={onDelete} />
          </PrivateRoute>
          <PrivateRoute exact path={ROUTES.CHANGE_PASSWORD}>
            <ChangePassword onPasswordChange={onPasswordChange} />
          </PrivateRoute>
          <Route exact path={ROUTES.LOGOUT}>
            <Logout onLogout={onLogout} />
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
