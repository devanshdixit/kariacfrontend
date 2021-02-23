import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createOrder } from "../actions/orderActions";
import CheckoutSteps from "../components/CkeckoutSteps";
import Base from "../components/core/Base";
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { ORDER_CREATE_RESET } from "../constants/orderConstants";
export default function PlaceOrderScreen(props) {
  const cart = useSelector((state) => state.cart);
  if (!cart.paymentMethod) {
    props.history.push("/payment");
  }
  const orderCreate = useSelector((state) => state.orderCreate);
  const { userInfo } = useSelector((state) => state.userSignin);
  const { loading, success, error, order } = orderCreate;
  const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
  const dispatch = useDispatch();
  const placeOrderHandler = () => {
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems ,userInfo}));
  };
  useEffect(() => {
    if (success) {
      props.history.push(`/order/${order.id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch,order,props.history,success]);
  return (
    <Base>
    <div className="conatiner-fluid  p-2">
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="row ">
        <div className="col-md-9 p-2">
          <ul className="list-group list-group-flush">
            <li className="productcard list-group-item m-2 border ">
              <h3 className=" font-weight-bold">Shipping:</h3>
              <p>
                <strong>Name:</strong> {cart.shippingAddress.fullName} <br />
                <strong>Address: </strong> {cart.shippingAddress.address},
                {cart.shippingAddress.city}, {cart.shippingAddress.postalCode},
                {cart.shippingAddress.country}
              </p>
            </li>
            <li className="productcard list-group-item m-2 border ">
              <h3 className=" font-weight-bold">Payment:</h3>
              <p>
                <strong>Method:</strong> {cart.paymentMethod}
              </p>
            </li>
            <li className="productcard list-group-item m-2 border productcard">
              <h3 className=" font-weight-bold">Order Items:</h3>
              <ul className="list-group list-group-flush  ">
                {cart.cartItems.map((item) => (
                  <li
                    key={item.product}
                    className="productcard list-group-item  "
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
                        <Link
                          to={`/product/${item.product}`}
                          className="mx-auto"
                        >
                          <h4 className="text-dark">{item.name}</h4>
                        </Link>
                      </div>
                      <div className="col-md p-2">
                        <p className=" font-weight-bold">
                          {item.qty} x ₦{item.price} = ₦{item.qty * item.price}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <div className="col-md-3 p-4">
          <div className=" border  productcard">
            <dir className="mx-auto ">
              <h3 className=" font-weight-bold">Order Summary:</h3>
            </dir>
            <ul className="list-group list-group-flush">
              <li className="productcard list-group-item border border-0 ">
                <p className="float-left font-weight-bold d-inline">Items : </p>
                <p className="float-right float-md-left font-weight-bold d-inline">
                ₦{cart.itemsPrice.toFixed(2)}
                </p>
              </li>
              <li className="productcard list-group-item  border border-0 ">
                <p className="float-left font-weight-bold d-inline">
                  Shipping :{" "}
                </p>
                <p className="float-right float-md-left font-weight-bold d-inline">
                ₦{cart.shippingPrice.toFixed(2)}
                </p>
              </li>
              <li className="productcard list-group-item  border border-0">
                <p className="float-left font-weight-bold d-inline">Tax :</p>
                <p className="float-right float-md-left font-weight-bold d-inline">
                ₦{cart.taxPrice.toFixed(2)}
                </p>
              </li>
              <li className="productcard list-group-item border border-0">
                <p className="float-left font-weight-bold d-inline">
                  Order Total :
                </p>
                <p className="float-right float-md-left font-weight-bold d-inline">
                ₦{cart.totalPrice.toFixed(2)}
                </p>
              </li>
              <li className="list-group-item productcard  ">
                <button
                  type="button"
                  onClick={placeOrderHandler}
                  className="btn btn-warning btn-block  border border-dark font-weight-bold"
                  disabled={cart.cartItems.length === 0}
                >
                  Place Order
                </button>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant='danger'>{error}</MessageBox>}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </Base>
  );
}
