import React , { useState } from 'react';
import { Link,Redirect} from "react-router-dom";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import { isAutheticated,authenticate } from './helpers/index';

const FacebookAuth = () =>  {
    const [values, setValues] = useState({
        
        success: false
      });
      const {success } = values;

  const facebookResponse = (response) => {const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
  const options = {
      method: 'POST',
      body: tokenBlob,
      mode: 'cors',
      cache: 'default'
  };
  fetch('http://localhost:4000/api/v1/auth/facebook', options).then(r => {
      const token = r.headers.get('x-auth-token');
      r.json().then(user => {
          if (token) {
              this.setState({isAuthenticated: true, user, token})
              authenticate(token, () => {
                setValues({
                  ...values,
                  success: true
                });
              });
          }
      });
  })
};
const performRedirect = () => {
    if (isAutheticated()) {
      return <Redirect to="/" />;
    } else if (success) {
          return <Redirect to="/" />;
      }
    };
    return (
        <div>
            {performRedirect()}
                    <FacebookLogin
                        appId="184682216542781"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={facebookResponse}
                        render={renderProps => (
                            <Link className="btn btn-outline-primary btn-block" to='/' onClick={renderProps.onClick}><i className="fa fa-facebook"></i> Sign in with <b>Facebook</b></Link>
                          )} />
        </div>
    );
}

export default FacebookAuth;
