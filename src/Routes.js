import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FeedPage from "./components/core/FeedPage";
import PrivateRoute from './components/auth/helpers/PrivateRoutes'
import './index.css';
import RegisterPage from "./components/auth/RegisterPage";
import SigninPage from "./components/auth/SigninPage";
import ProfilePage from "./components/user/profile";
const Routes = () => {
  return (
    <BrowserRouter>
    
      <Switch>
        <PrivateRoute path="/" exact component={FeedPage}/>
        <PrivateRoute path="/profile" exact component={ProfilePage}/>
        <Route path="/signin" exact component={SigninPage} />
        <Route path="/register" exact component={RegisterPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
