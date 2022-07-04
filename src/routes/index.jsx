import { Switch } from "react-router-dom";
import Route from "./protectedRoute";

import { useContext } from "react";
import { UserContext } from "../providers/User";

import LandingPage from "../pages/LandingPage";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Habits from "../pages/Habits";
import InitialGroups from "../pages/InitialGroups";
import YourGroups from "../pages/YourGroups";
import AllGroups from "../pages/AllGroups";
import NotFound from "../pages/NotFound";

const Routes = () => {
  const { token } = useContext(UserContext);

  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/SignIn" component={SignIn} />
      <Route isPrivate path="/Habits" component={Habits} />
      <Route isPrivate path="/Groups" component={InitialGroups} />
      <Route isPrivate path="/YourGroups" component={YourGroups} />
      <Route isPrivate path="/AllGroups" component={AllGroups} />
      <Route isPrivate={!!token} component={NotFound} />
    </Switch>
  );
};

export default Routes;
