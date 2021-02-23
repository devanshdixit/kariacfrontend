import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../actions/userActions";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";
import Base from "../core/Base";

export default function SigninScreen(props) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  const signInForm = () => {
    return (
      <div className="login-form  shadow ">
        <form>
          <h2 className="text-center">Sign in</h2>
          <div className="text-center social-btn"></div>
          <div className="or-seperator">
            <i>or</i>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <span className="fa fa-user"></span>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                name="username"
                placeholder="Email Id"
                required="required"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                name="password"
                placeholder="Password"
                required="required"
              />
            </div>
          </div>
          <div className="form-group">
            <button
              type="submit"
              onClick={submitHandler}
              className="btn btn-success btn-block login-btn"
            >
              Sign in
            </button>
          </div>
          <div className="clearfix">
            <label className="float-left form-check-label">
              <input type="checkbox" /> Remember me
            </label>
            <Link className="float-right text-success" to="/">
              Forgot Password?
            </Link>
          </div>
        </form>
        <div className="hint-text">
          Don't have an account?{" "}
          <Link className="text-success" to={`/register?redirect=${redirect}`}>
            Register Now!
          </Link>
        </div>
      </div>
    );
  };

  return (
    <Base>
      {loading && <LoadingBox></LoadingBox>}
      {error && <MessageBox variant="danger">{error}</MessageBox>}
      {signInForm()}
    </Base>
  );
}
