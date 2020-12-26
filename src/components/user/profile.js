import Base from "../core/Base";
import React , { useState } from "react";
import { signout } from "../auth/helpers";
import { Redirect} from "react-router-dom";

const  ProfilePage = () => {    

  const [values, setValues] = useState({
    success: false
  });
  const { success } = values;

  const performRedirect = () => {
  if (success) {
          return <Redirect to="/" />;
      }
  };


return (
    <Base title='profile'>
    
     <div>
         <button onClick={()=>{
              signout(() => {
                setValues({
                  ...values,
                  success: true
                });
              });
            }} className=" btn btn-success" >Signout</button>
     </div>
     {performRedirect()}
    </Base>
  );
};
export default ProfilePage;