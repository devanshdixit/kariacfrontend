import { API } from "../../backend";

// get all Category products
export const getCategory = (categoryid) => {
  return fetch(`${API}/category/${categoryid}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//get sub-category products
export const getSubcategoryProducts = (subcategoryid, categoryid) => {
  return fetch(`${API}/category/${categoryid}/${subcategoryid}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
