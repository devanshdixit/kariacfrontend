import { API } from "../../backend";


// get all Categories
export const getCategories = () => {
    return fetch(`${API}/categories`,{
      method: "GET",
    })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
  };
  