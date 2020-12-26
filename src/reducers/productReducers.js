import { BLOGS_DETAIL_FAIL, BLOGS_DETAIL_REQUEST, BLOGS_DETAIL_SUCCESS, BLOGS_FAIL, BLOGS_REQUEST, BLOGS_SUCCESS } from "../constants/blogsConstants";
import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAILS_SUCCESS,
} from "../constants/productConstants";

export const productListReducer = (state = { loading: true, products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (state = { product: {}, loading: true }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const blogsListReducer = (state = { loading: true, blogs: [] }, action) => {
  switch (action.type) {
    case BLOGS_REQUEST:
      return { loading: true };
    case BLOGS_SUCCESS:
      return { loading: false, blogs: action.payload };
    case BLOGS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const blogDetailsReducer = (state = { blog: {}, loading: true }, action) => {
  switch (action.type) {
    case BLOGS_DETAIL_REQUEST:
      return { loading: true };
    case BLOGS_DETAIL_SUCCESS:
      return { loading: false, blog: action.payload };
    case BLOGS_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};