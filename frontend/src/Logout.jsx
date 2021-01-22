import { logout } from "./provider";
import { Redirect } from "react-router-dom";

export function Logout({ onLogout, redirectPath }) {
  logout();
  onLogout();

  return <Redirect to={redirectPath} />;
}
