import { API } from "../../../backend";
import axios from 'axios';

export const register = user => {
  console.log(JSON.stringify(user));
  return   axios.post(`${API}register`,   {user})
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(err  => {
      console.log(err);
    });
};

export const signin = user => {
  return axios.post(`${API}signin`, {user})
    .then(response => {
      return response;
    })
    .catch((err) =>{
      console.log(err);
    });
};

export const authenticate = (data, next) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("jwt", JSON.stringify(data));
      next();
    }
  };
  
export const isAutheticated = () => {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("jwt")) {
      return JSON.parse(localStorage.getItem("jwt"));
    } else {
      return false;
    }
  };

export const signout = next => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("jwt");
      next();
  
      return axios(`${API}signout`)
        .then(response => console.log("signout success"))
        .catch(err => console.log(err));
    }
  };
 