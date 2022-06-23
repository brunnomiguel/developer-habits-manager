import { Route as CommonRoute, Redirect } from "react-router-dom";

import { useContext } from "react";
import { UserContext } from "../providers/User";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { token } = useContext(UserContext);

  return (
    <CommonRoute
      {...rest}
      render={() => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/SignIn" : "/Habits"} />
        );
      }}
    />
  );
};

export default Route;
