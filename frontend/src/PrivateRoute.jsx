import { Route, Redirect } from "react-router-dom";
import { ROUTES } from "./constants";
import { getStoredUserData } from "./provider";

export function PrivateRoute({ children, ...props }) {
  const userData = getStoredUserData();

  function render({ location }) {
    if (userData?.username) {
      return children;
    }

    return (
      <Redirect
        to={{
          pathname: ROUTES.LOGIN,
          state: { from: location },
        }}
      />
    );
  }

  return <Route {...props} render={render} />;
}
