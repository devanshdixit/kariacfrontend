import { API } from "../../backend";


// get all Categories
export const getProducts = () => {
    return fetch(`${API}/products`,{
      method: "GET",
      
    })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
  };
  