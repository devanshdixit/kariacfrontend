import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../actions/userActions";

// const currentTab = (history, path) => {
//   if (history.location.pathname === path) {
//     return { color: "#2ecc72" };
//   } else {
//     return { color: "#FFFFFF" };
//   }
// };

const Menu = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signOutHandler = () => {
    dispatch(signout());
  };
  return (
    <nav className="navbar navbar-expand-md   shadow-lg navbar-light sticky-top navbardesign ">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={`${process.env.PUBLIC_URL}/images/kariacnew.png`}
            alt=""
            style={{ height: "70px", width: "100%" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/"
              style={{ fontSize: "20px" }}>
                <p
                  className=" font-weight-bold text-white "
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  Home
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/cart"
                style={{ fontSize: "20px" }}
              >
                <p
                  className=" font-weight-bold text-white"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  Cart
                  {cartItems.length > 0 && (
                    <span className="badge">{cartItems.length}</span>
                  )}
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/blogs"
                style={{ fontSize: "20px" }}
              >
                <p
                  className=" font-weight-bold text-white"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  Blogs
                </p>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle font-weight-bold text-white"
                to="#"
                id="navbardrop"
                data-toggle="dropdown"
                style={{ fontSize: "20px" }}
              >
                {userInfo ? userInfo.name : 'Account'}
              </Link>
              <div className="dropdown-menu">
                {userInfo ? (
                  <Fragment>
                   
                     <p data-toggle="collapse"
                  data-target=".navbar-collapse.show"> <Link className="dropdown-item"  to="/orderhistory"> Order History</Link></p>
                    
                    <Link className="dropdown-item" to="#" onClick={signOutHandler} data-toggle="collapse"
                  data-target=".navbar-collapse.show">
                      Signout
                    </Link>
                  </Fragment>
                ) : (<Link className="dropdown-item" to="/signin">
                <p
                  data-toggle="collapse"
                  className="font-weight-bold"
                  data-target=".navbar-collapse.show"
                >
                  Signin
                </p>
              </Link>)}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
