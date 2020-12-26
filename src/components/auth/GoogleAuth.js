import React , { useState } from 'react';
import { Link,Redirect} from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
import { isAutheticated,authenticate } from './helpers/index';
import axios from 'axios'
const GoogleAuth = () =>  {
    const [values, setValues] = useState({
        loading1:false,
        success: false
      });
      const {success ,loading1} = values;
  const  googleResponse = (response) => { 
    setValues({
      loading1: true,
    });
    axios({
      method: "POST",
      url: "https://us-central1-database-664f5.cloudfunctions.net/api/auth/google",
      data: {tokenId : response.tokenId}
    }).then((response) => {
      authenticate(response.data.token, () => {
        setValues({
          ...values,
        loading1:false,
          success: true
        });
      });
    });


  //   const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
  //   console.log(tokenBlob.access_token);
  // const options = {
  //     method: 'POST',
  //     body: {
  //       access_token : response.accessToken,
  //     },
  //     mode: 'cors',
  //     cache: 'default'
  // };
  // fetch('http://localhost:5001/database-664f5/us-central1/api/auth/google', options).then(r => {
  //   console.log(r);
  // })
};

  const performRedirect = () => {
    if (isAutheticated()) {
      return <Redirect to="/" />;
    } else if (success) {
          return <Redirect to="/" />;
      }
    };
    const loadingMessage1 = () => {
      return (
        loading1 && (
          <div className="alert alert-info">
            <h2>Loading...</h2>
          </div>
        )
      );
    };
    return (
        <div>
            
            {performRedirect()}
                  {loadingMessage1()}
            <GoogleLogin
                        clientId="847821315251-ttrst34ht06pa5508dufnpt8vgcequno.apps.googleusercontent.com"
                        buttonText="Sign in with Google"
                        onSuccess={googleResponse}
                        onFailure={googleResponse}
                        render={renderProps => (
                            <Link className="btn btn-outline-primary btn-block" to='/' onClick={renderProps.onClick}><i className="fa fa-google"></i> Sign in with <b>Google</b></Link>
                       
                          )}
                    />
        </div>
    );
}

export default GoogleAuth;
