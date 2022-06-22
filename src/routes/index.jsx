import { Switch, Route } from "react-router-dom";
// import LandingPage from "../pages/LandingPage";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
// import Habits from "../pages/Habits";

const Routes = () => {
  return (
    <Switch>
      {/* <Route exact path="/" component={LandingPage} /> */}
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/SignIn" component={SignIn} />
      {/* <Route exact path="/Habits" component={Habits} /> */}
    </Switch>
  );
};

export default Routes;
