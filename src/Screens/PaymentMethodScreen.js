import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutSteps from '../components/CkeckoutSteps';

export default function PaymentMethodScreen(props) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress.address) {
    props.history.push('/shipping');
  }
  const [paymentMethod, setPaymentMethod] = useState('PayPal');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push('/placeorder');
  };
  return (
    <div className='overflow-hidden'>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div  className='d-flex justify-content-center '>
      <div className="card p-5 shadow  ">
      <form  onSubmit={submitHandler}>
        <div className='form-group card-body'>
          <h1>Payment Method</h1>
        </div>
        <div className="form-group font-weight-bold">
        <label className="form-check-label" htmlFor="paypal">
    <input  type="radio"
              id="paypal"
              value="PayPal"
              name="paymentMethod"
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)} />  PayPal</label>
           
        </div>
        <div className='form-group font-weight-bold'>
           
            <label className="form-check-label" htmlFor="stripe">
            <input
              type="radio"
              id="stripe"
              value="Stripe"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}/>  Stripe</label>
        </div>
        <div>
          <label />
          <button type="submit" className="btn btn-warning btn-block  border border-dark font-weight-bold">Continue</button>
        </div>
      </form>
      </div>
      </div>
    </div>
  );
}