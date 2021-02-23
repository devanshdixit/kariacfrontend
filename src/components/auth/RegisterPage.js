import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";
import { register } from "../../actions/userActions";
import Base from "../core/Base";

export default function RegisterScreen(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm password are not match");
    } else {
      dispatch(register(name, email, password));
    }
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  const registerForm = () => {
    return (
      <div className="login-form shadow ">
        <form>
          <h2 className="text-center">Register</h2>
          <div className="text-center social-btn">
            <Link className="btn btn-primary btn-block" to="/">
              <i className="fa fa-google"></i> Register with <b>Google</b>
            </Link>
          </div>
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
                onChange={(e) => setName(e.target.value)}
                name="username"
                placeholder="Username"
                required="required"
                value={name}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <span className="fa fa-envelope"></span>
                </span>
              </div>
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                name="email"
                placeholder="email"
                required="required"
                value={email}
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
                value={password}
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
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="form-control"
                name="confirmpassword"
                placeholder="Confirm Password"
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
              Register
            </button>
          </div>
        </form>
        <div className="hint-text">
          Already a user?{" "}
          <Link className="text-success" to={`/signin?redirect=${redirect}`}>
            Sign in Here!
          </Link>
        </div>
      </div>
    );
  };

  return (
    <Base>
      {loading && <LoadingBox></LoadingBox>}
      {error && <MessageBox variant="danger">{error}</MessageBox>}
      {registerForm()}
    </Base>
  );
}
