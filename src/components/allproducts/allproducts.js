import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listProducts } from "../../actions/productActions";
import MessageBox from "../MessageBox";
import Product from "../product/productcard";

export default function ProductsPage(props) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div className="container  p-4">
      {loading ? (
        <div className="row center">
          <h1>Loading .. </h1>
        </div>
      ) : error ? (
          <MessageBox variant="danger">{error}<Link to={props.match.path}>refresh</Link></MessageBox>
      ) : (
        <div className="card-columns">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      )}
    </div>
  );
}
