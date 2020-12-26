import Axios from "axios";
import { API } from "../backend";
import { BLOGS_DETAIL_FAIL, BLOGS_DETAIL_REQUEST, BLOGS_DETAIL_SUCCESS, BLOGS_FAIL, BLOGS_REQUEST, BLOGS_SUCCESS } from "../constants/blogsConstants";
import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

export const listProducts = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`${API}/product`);
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error,
    });
  }
};

export const detailsProduct = (productId) => async (dispatch) => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
  try {
    const { data } = await Axios.get(`${API}/product/${productId}`);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const listBlogs = () => async (dispatch) => {
  dispatch({
    type: BLOGS_REQUEST,
  });
  try {
    const { data } = await Axios.get(`${API}/blogs`);
    dispatch({
      type: BLOGS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BLOGS_FAIL,
      payload: error,
    });
  }
};

export const detailsBlog = (blogId) => async (dispatch) => {
  console.log(blogId);
  dispatch({ type: BLOGS_DETAIL_REQUEST, payload: blogId });
  try {
    const { data } = await Axios.get(`${API}/blog/${blogId}`);
    dispatch({ type: BLOGS_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BLOGS_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
