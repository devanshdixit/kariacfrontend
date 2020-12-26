import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsProduct } from "../actions/productActions";

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };

 
  return (
    <div className="container ">
      {loading ? (
        <div className="row mx-auto">
          <h1>Loading .. </h1>
        </div>
      ) : error ? (
        <div className="row mx-auto">
          <h1>{error}</h1><Link to={props.match.path}>refresh</Link>
        </div>
      ) : (
        <div className=" ">
          <div className="row">
            <div className="col-md-4 p-2  ">
            <Link to="/" className=' font-weight-bold text-danger mb-2'>Back to main page</Link>
            <div id="demo" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to='0' className="active"></li>
                {product[0].images.map((imag,inde) => (
                  <li data-target="#demo" data-slide-to={inde} key={inde} ></li>
                ))}
                </ul>
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <img                   
                      src={product[0].images[0]}
                      alt='0'
                      width="100%"
                      height="100%"
                      className=" mx-auto d-block img-thumbnail" 
                    />
                  </div>
                  {product[0].images.map((image,index) => (
                  <div className="carousel-item "  key={index}>
                    <img
                      src={product[0].images[index]}
                      alt={index}
                      width="100%"
                      height="100%"
                      className=" mx-auto d-block img-thumbnail" 
                    />
                  </div>
                  ))}
                </div>

                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
                </a>
                <a  className="carousel-control-next" href="#demo" data-slide="next">
                  <span className="carousel-control-next-icon"></span>
                </a>
              </div>
            </div>
            <div className="col-md-4 p-2 ">
              <ul className="list-group border">
                <li className="list-group-item border border-0 productcard">
                  <h1>{product[0].name}</h1>
                </li>
                <li className="list-group-item border border-0 productcard font-weight-bold">
                  Pirce : {product[0].currency_symbol}
                  {product[0].price}
                </li>
                <li className="list-group-item border border-0 productcard font-weight-bold">
                  Description:
                  <p className="font-weight-light">{product[0].description}</p>
                </li>
              </ul>
            </div>
            <div className="col-md-4 p-2">
              <div className="card productcard border">
                <ul className="list-group list-group-flush  ">
                  <li className="list-group-item border border-0 productcard">
                    <p className="float-left d-inline font-weight-bold">
                      Price:
                    </p>
                    <p className="float-right d-inline font-weight-bold">
                      {product[0].currency_symbol}
                      {product[0].price}
                    </p>
                  </li>
                  <li className="list-group-item border border-0 productcard">
                    <p className="float-left font-weight-bold d-inline">
                      Status:
                    </p>
                    <p className="float-right d-inline">
                      {product[0].countInStock > 0 ? (
                        <span className="success font-weight-bold">
                          In Stock
                        </span>
                      ) : (
                        <span className="text-danger font-weight-bold">
                          Unavailable
                        </span>
                      )}
                    </p>
                  </li>
                  {product[0].countInStock > 0 && (
                    <>
                      <li className="list-group-item border border-0 productcard">
                        <p className="float-left d-inline font-weight-bold">
                          Quantity:
                        </p>
                        <p className="float-right d-inline">
                          <select
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product[0].countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </select>
                        </p>
                      </li>
                      <li className="list-group-item  productcard">
                        <button
                          type="button"
                          className="btn btn-warning btn-block border border-dark font-weight-bold"
                          onClick={addToCartHandler}
                        >
                          Add to Cart
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
