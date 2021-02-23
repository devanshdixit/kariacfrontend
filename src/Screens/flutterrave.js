import React from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { useDispatch } from 'react-redux';
import {  payOrder } from '../actions/orderActions';
import Base from '../components/core/Base';

export default function Ravepayment({user,order,props}) {

  var time = Date.now();
   const config = {
    public_key: 'FLWPUBK-16b3863e9401b6cb88478ffe90104e53-X',
    tx_ref: order.id + time,
    amount: order.totalPrice,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: user.email,
      phonenumber: '0706w4586146',
      name: user.name,
    },
  };
  const dispatch = useDispatch();
  const fwConfig = {
    ...config,
    text: 'Pay with Flutterwave!',
    className: "btn btn-warning btn-block  border border-dark font-weight-bold",
    callback: (response) => {
       dispatch(payOrder(order, response));
       closePaymentModal();
       
    },
    onClose: () => {},
  };

  return (
    <Base>
    <div className="">
      <FlutterWaveButton {...fwConfig} />
    </div>
    </Base>
  );
}
