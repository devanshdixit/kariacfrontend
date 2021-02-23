import Axios from "axios";
import { API } from "../backend";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
} from "../constants/cartConstants";

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`${API}/product/${productId}`);
  var item = data[0];
  var total = 0;
  if (data[0].currency_short_form === 'USD') {
    const { data } = await Axios.get(`${API}/prices`);
    console.log(data);
    const naira =  data.quotes.USDNGN;
    total = item.price * naira;
  } else {
    total = data[0].price;
  }
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data[0].name,
      images: data[0].images,
      price: total,
      countInStock: data[0].countInStock,
      product: data[0]._id,
      currency_symbol: '₦',
      currency_short_form: 'NGN',
      qty,
    },
  });
  
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (shippingAddress) => async (dispatch,getState) => {
   try {
    const {
      userSignin: { userInfo },
    } = getState();
    const userid = userInfo.user_id;
    const fullName = shippingAddress.fullName
    const address = shippingAddress.address;
    const city = shippingAddress.city;
    const country = shippingAddress.country;
    const postalCode = shippingAddress.postalCode;
    const { data } = await Axios.post(`${API}/users/shipping`, {
      address,
      city,
      fullName,
      country,
      postalCode,
      userid,
    });
    console.log(data);
    localStorage.setItem("shippingAddress", JSON.stringify(shippingAddress));
   } catch (error) {
   }
};

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: data });
  };