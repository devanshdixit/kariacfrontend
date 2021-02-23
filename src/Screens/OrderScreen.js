import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsOrder } from "../actions/orderActions";
import { API } from "../backend";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { Fragment } from "react";
import Ravepayment from "./flutterrave";
import { ORDER_PAY_RESET } from "../constants/orderConstants";
import Base from "../components/core/Base";
 

export default function OrderScreen(props) {

  // const config = {
  //   txref: "rave-123456",
  //   customer_email: "user@example.com",
  //   customer_phone: "234099940409",
  //   amount: 2000,
  //   PBFPubKey: "",
  //   production: false,
  //   onSuccess: () => {
  //     console.log("SUCCESS RAVE");
  //   },
  //   onClose: () => {
  //     console.log("FAILED RAVE");

  //   }
  // };
  const orderId = props.match.params.id;
  const orderDetails = useSelector((state) => state.orderDetails);
  const { userInfo } = useSelector((state) => state.userSignin);
  const { order, loading, error } = orderDetails;
  const [sdkReady,setSdkReady] = useState(false);
  const orderPay = useSelector((state) => state.orderPay);
  const {
    success: successPay,
  } = orderPay;
  const dispatch = useDispatch();
  
  useEffect(() => {
    const addPayPalScript = async () => {
      const { data } = await Axios.get(`${API}/config/paypal`);
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.sandbox.paypal.com/sdk/js?client-id=${data}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (!order || successPay || (order && order.id !== orderId)) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(detailsOrder(orderId));
    } else {
      if (!order.isPaid) {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      }
    }
  }, [dispatch, order, orderId, sdkReady,successPay]);


  return loading ? (
    <Base>
    <LoadingBox></LoadingBox>
    </Base>
  ) : error ? (
    <Base>
    <MessageBox variant="danger">{error}<Link to={props.match.path}>refresh</Link></MessageBox>
    </Base>
  ) : (
    <Base>
    <div className="container-fluid">
      <h6 className=" font-weight-bold m-3">Order : {order.id}</h6>
      {
                order.isPaid && 
                (
                  <Link to='/orderhistory'>
                  <button className="btn btn-warning btn-block  border border-dark font-weight-bold ">CLick Here! to view the status of your Order</button>
                  </Link>
                )
              }
      <div className="row">
        <div className="col-md-9 p-2">
          <ul className="list-group list-group-flush">
            <li className="productcard list-group-item m-2 border ">
              <h3 className=" font-weight-bold">Shipping:</h3>
              <p>
                <strong>Name:</strong> {order.shippingAddress.fullName} <br />
                <strong>Address: </strong> {order.shippingAddress.address},
                {order.shippingAddress.city}, {order.shippingAddress.postalCode}
                ,{order.shippingAddress.country}
              </p>
              {order.isDelivered ? (
                  <MessageBox variant="success">
                    Delivered at {order.deliveredAt}
                    
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">Not Delivered</MessageBox>
                )}
            </li>
            <li className="productcard list-group-item m-2 border ">
              <h3 className=" font-weight-bold">Payment:</h3>
              <p>
                <strong>Method:</strong> {order.paymentMethod}
              </p>
              {order.isPaid ? (
                  <MessageBox variant="success">
                    Paid
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">Not Paid</MessageBox>
                )}
            </li>
            <li className="productcard list-group-item m-2 border productcard">
              <h3 className=" font-weight-bold">Order Items:</h3>
              <ul className="list-group list-group-flush  ">
                {order.orderItems.map((item,index) => (
                  <li
                    key={index}
                    className="productcard list-group-item  "
                  >
                    <div className="row">
                      <div className="col-md">
                        <img
                          className="img-fluid"
                          src={item.images}
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
                ₦{order.itemsPrice.toFixed(2)}
                </p>
              </li>
              <li className="productcard list-group-item  border border-0 ">
                <p className="float-left font-weight-bold d-inline">
                  Shipping :{" "}
                </p>
                <p className="float-right float-md-left font-weight-bold d-inline">
                ₦{order.shippingPrice.toFixed(2)}
                </p>
              </li>
              <li className="productcard list-group-item  border border-0">
                <p className="float-left font-weight-bold d-inline">Tax :</p>
                <p className="float-right float-md-left font-weight-bold d-inline">
                ₦{order.taxPrice.toFixed(2)}
                </p>
              </li>
              <li className="productcard list-group-item border border-0">
                <p className="float-left font-weight-bold d-inline">
                  Order Total
                </p>
                <p className="float-right float-md-left font-weight-bold d-inline">
                ₦{order.totalPrice.toFixed(2)}
                </p>
              </li>
              {
                !order.isPaid && 
                (
                  <Fragment>
                  <li className="list-group-item productcard  ">
                  <Ravepayment user={userInfo} order={order} props={props}></Ravepayment>
                  </li>
                  </Fragment>
                )
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
    </Base>
  );
}
