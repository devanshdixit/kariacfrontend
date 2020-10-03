import React, { useState } from 'react';
import Base from '../core/Base';
import { Link,Redirect} from "react-router-dom";
import { register , isAutheticated  } from './helpers/index';


const  RegisterPage = () => {
  const [values, setValues] = useState({
    handle: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
    loading: false,
    success: false
  });

  const { handle, email, password,confirmPassword, error, success ,loading} = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false,loading :true });
    register({ email,password,confirmPassword,handle })
      .then(data => {
        if (data.data.handle) {
          setValues({ ...values, error: data.data.handle, success: false,loading:false });
        } else if (data.data.email) {
          setValues({ ...values, error: data.data.email, success: false,loading:false });
        } else if (data.data.general) {
          setValues({ ...values, error: data.data.general, success: false,loading:false });
        } else {
          setValues({
            ...values,
            loading : false,
            handle: "",
            email: "",
            password: "",
            confirmPassword: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error in signup"));
  };

  const signUpForm = () => {
    return (
        <div className="login-form ">
        <form  >
            <h2 className="text-center">Register</h2>		
            <div className="text-center social-btn">
                
                <Link className="btn btn-primary btn-block" to='/'><i className="fa fa-google"></i> Register with <b>Google</b></Link>
            </div>
            <div className="or-seperator"><i>or</i></div>
        <div className="form-group">
                <div className="input-group">                
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <span className="fa fa-envelope"></span>
                        </span>                    
                    </div>
                    <input type="text" onChange={handleChange("email")} className="form-control" name="email" placeholder="email" required="required" value={email}/>
                </div>
            </div>
            <div className="form-group">
                <div className="input-group">                
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <span className="fa fa-user"></span>
                        </span>                    
                    </div>
                    <input type="text" className="form-control" onChange={handleChange("handle")} name="username" placeholder="Username" required="required" value={handle}/>
                </div>
            </div>
            <div className="form-group">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="fa fa-lock"></i>
                        </span>                    
                    </div>
                    <input type="password" onChange={handleChange("password")} className="form-control" name="password" placeholder="Password" required="required" value={password}/>
                </div>
            </div>      
            <div className="form-group">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="fa fa-lock"></i>
                        </span>                    
                    </div>
                    <input type="password" onChange={handleChange("confirmPassword")} className="form-control" name="confirmpassword" placeholder="Confirm Password" required="required"/>
                </div>
            </div>    
            <div className="form-group">
                <button type="submit"  onClick={onSubmit} className="btn btn-success btn-block login-btn">Register</button>
            </div>
         
            
        </form>
        <p className="text-white text-center">{JSON.stringify(values)}</p>
        
    </div>
    );
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account was created successfully.  Please 
            <Link to="/signin">  Signin Here</Link>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };
  const performRedirect = () => {
    if (isAutheticated()) {
      return <Redirect to="/" />;
    } else if (success) {
          return <Redirect to="/" />;
      }
  };
  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
  };
    return (
      <Base>
        {loadingMessage()}
        {successMessage()}
        {errorMessage()}
        {performRedirect()}
        {signUpForm()}
      </Base>
    );
};
export default RegisterPage;