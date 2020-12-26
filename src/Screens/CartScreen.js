import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  removeFromCart,
  addToSummary,
} from "../actions/cartActions";

export default function CartScreen(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const cart = useSelector((state) => state.cart);
  const { cartItems, summary } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch, productId, qty]);
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };
  return (
    <div className="container-fluid">
      <div className="row">
        {windowWidth <= 768 ? (
          <div className="col-md-3 p-4 ">
            <div className=" border">
              <ul className="list-group list-group-flush">
                <li className="list-group-item productcard  border border-bottom-0">
                  <p className="font-weight-bold text-center">
                    Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items)
                    : ₦{cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                  </p>
                </li>
                <li className="list-group-item  productcard">
                  <button
                    type="button"
                    onClick={checkoutHandler}
                    className="btn btn-warning btn-block  border border-dark font-weight-bold"
                    disabled={cartItems.length === 0}
                  >
                    Proceed to Checkout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : null}

        <div className="col-md-9 p-2  ">
          <dir className="mx-auto ">
            <h3 className=" font-weight-bold">Shopping Cart:</h3>
          </dir>
          {cartItems.length === 0 ? (
            <div>
              Cart is empty. <Link to="/">Go Shopping</Link>
            </div>
          ) : (
            <ul className="list-group list-group-flush ">
              {cartItems.map((item) => (
                <li
                  key={item.product}
                  className="list-group-item border productcard m-2"
                >
                  <div className="row">
                    <div className="col-md">
                      <img
                        className="img-fluid"
                        src={item.images[0]}
                        alt={item.name}
                        width="460"
                        height="345"
                      />
                    </div>
                    <div className="col-md p-2">
                      <Link to={`/product/${item.product}`} className="mx-auto">
                        <h4 className="text-dark">{item.name}</h4>
                      </Link>
                    </div>
                    <div className="col-md p-2">
                      <p className="float-left font-weight-bold d-inline">
                        Quantity :{" "}
                      </p>
                      <p className="float-right float-md-left d-inline">
                        <select
                          className=""
                          value={item.qty}
                          onChange={(e) =>
                            dispatch(
                              addToCart(item.product, Number(e.target.value))
                            )
                          }
                        >
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </p>
                    </div>
                    <div className="col-md mx-auto p-2 ">
                      <p className="float-left font-weight-bold d-inline">
                        Price :{" "}
                      </p>
                      <p className="float-right float-md-left font-weight-bold d-inline">
                        {item.currency_symbol}
                        {item.price}
                      </p>
                    </div>
                    <div className="col-md mx-auto p-2">
                      <button
                        type="button"
                        className="btn btn-warning border border-dark btn-block font-weight-bold"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {windowWidth > 768 ? (
          <div className="col-md-3 p-4 ">
            <div className=" border">
              <ul className="list-group list-group-flush">
                <li className="list-group-item productcard  border border-bottom-0">
                  <p className="font-weight-bold text-center">
                    Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items)
                    : ₦{cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                  </p>
                </li>
                <li className="list-group-item  productcard">
                  <button
                    type="button"
                    onClick={checkoutHandler}
                    className="btn btn-warning btn-block  border border-dark font-weight-bold"
                    disabled={cartItems.length === 0}
                  >
                    Proceed to Checkout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
