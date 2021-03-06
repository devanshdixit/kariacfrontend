import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/auth/helpers/PrivateRoutes";
import "./index.css";
import SigninPage from "./components/auth/SigninPage";
import ProfilePage from "./components/user/profile";
import HomePage from "./components/dashboard/home";
import CategoryPage from "./components/category/category";
import ProductsPage from "./components/allproducts/allproducts";
// Firebase App (the core Firebase SDK) is always required and must be listed first

// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import ShippingAddressScreen from "./Screens/ShippingAddressScreen";
import PaymentMethodScreen from "./Screens/PaymentMethodScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen";
import OrderScreen from "./Screens/OrderScreen";
import RegisterScreen from "./components/auth/RegisterPage";
import ravepayment from "./Screens/flutterrave";
import BlogsScreen from "./Screens/BlogsScreen";
import BlogScreen from "./Screens/BlogScreen";
import OrderHistoryScreen from "./Screens/OrderHistoryScreen";
import Tracking from "./Screens/Tacking";

const Routes = () => {
  

  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={ProductsPage} />
      <Route path="/shipping" exact component={ShippingAddressScreen} />
      <Route path="/payment" exact component={PaymentMethodScreen} />
      <Route path="/placeorder" exact component={PlaceOrderScreen} />
      <Route path="/cart/:id?" exact component={CartScreen} />
      <Route path="/cart" component={CartScreen} />
      <PrivateRoute path="/profile" exact component={ProfilePage} />
      <Route path="/signin" exact component={SigninPage} />
      <Route path="/register" exact component={RegisterScreen} />
      <Route path="/category/:categoryid" exact component={CategoryPage} />
      <Route path="/products" exact component={HomePage} />
      <Route path="/rave" exact component={ravepayment} />
      <Route path="/blogs" exact component={BlogsScreen} />
      <Route path="/blog/:blogId" exact component={BlogScreen} />
      <Route path="/orderhistory" exact component={OrderHistoryScreen} />
      <Route path="/product/:id" exact component={ProductScreen} />
      <Route path="/order/:id" exact component={OrderScreen} />
      <Route path="/track/:id" exact component={Tracking} />
      </Switch>
      {/* <nav
        className="navbar navbar-expand-sm    shadow-sm navbar-light fixed-bottom"
        style={{ backgroundColor: "transparent" }}
      >
        <div className="d-inline mx-auto" style={{ float: "right" }}>
          <a href="https://play.google.com/store/apps/details?id=com.kariac1.flutterbuyandsell">
            <img
              src={`${process.env.PUBLIC_URL}/images/android.svg`}
              alt="0"
              width="100%"
              height="100%"
              className="  img-thumbnail"
            />
          </a>
        </div>
        <div className="d-inline mx-auto" style={{ float: "left" }}>
          <a href="#">
            <img
              src={`${process.env.PUBLIC_URL}/images/ios.svg`}
              alt="0"
              width="100%"
              height="100%"
              className="  img-thumbnail"
            />
          </a>
        </div>
      </nav> */}

    </BrowserRouter>
  );
};

export default Routes;
