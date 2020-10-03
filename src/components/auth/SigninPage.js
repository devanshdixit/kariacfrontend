import React, { useState } from 'react';
import Base from '../core/Base';
import { Link,Redirect} from "react-router-dom";
import { signin ,isAutheticated,authenticate } from './helpers/index';




const SigninPage = () =>  {

    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        loading: false,
        success: false
      });
    
      const { email, password, error, loading, success } = values;
    
      const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
      };
    
      const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signin({ email, password })
          .then(data => {
            console.log(data.data.token);
            // if (data.error) {
            //   setValues({ ...values, error: data.error, loading: false });
            // } else {
            //   authenticate(data, () => {
            //     setValues({
            //       ...values,
            //       loading : false,
            //       success: true
            //     });
            //   });
            // }
            if (data.data.token != null) {
              authenticate(data, () => {
                    setValues({
                      ...values,
                      loading : false,
                      success: true
                    });
                  });
            } else {
              setValues({ ...values, error: data.data.general, loading: false });
            }
          })
          .catch( err =>
            { console.log('@@@@@@@@@@@@@@@@@@@@ ');
             console.log(err);
           });
      };
    

const signInForm = () => {
    return (
        <div className="login-form ">
    <form >
        <h2 className="text-center">Sign in</h2>		
        <div className="text-center social-btn">
			<Link className="btn btn-primary btn-block" to='/'><i className="fa fa-google"></i> Sign in with <b>Google</b></Link>
        </div>
		<div className="or-seperator"><i>or</i></div>
        <div className="form-group">
        	<div className="input-group">                
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <span className="fa fa-user"></span>
                    </span>                    
                </div>
                <input type="text" className="form-control" onChange={handleChange("email")} name="username" placeholder="Email Id" required="required" value={email} />
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
            <button type="submit" onClick={onSubmit} className="btn btn-success btn-block login-btn">Sign in</button>
        </div>
        <div className="clearfix">
            <label className="float-left form-check-label"><input type="checkbox"/> Remember me</label>
            <Link  className="float-right text-success" to="/">Forgot Password?</Link>
        </div>  
        
    </form>
    <div className="hint-text">Don't have an account? <Link className="text-success" to='/register'>Register Now!</Link></div>
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
            Signed in successfully.
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
        <Base >
        {successMessage()}
        {errorMessage()}
        {performRedirect()}
        {loadingMessage()}
        {signInForm()}
    </Base>
    );
};

export default SigninPage;
