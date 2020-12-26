import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from "../components/CkeckoutSteps";

export default function ShippingAddressScreen(props) {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const { shippingAddress } = userInfo;
    if (!userInfo) {
      props.history.push('/signin');
    }
    const [fullName, setFullName] = useState(shippingAddress.fullName);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);
    const dispatch = useDispatch();
    console.log(shippingAddress);
    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(
        saveShippingAddress({  fullName, address, city, postalCode, country })
      );
      props.history.push('/payment');
    };
    return (
      <div className='overflow-hidden'>
        <CheckoutSteps step1 step2></CheckoutSteps>
        <div  className='d-flex justify-content-center '>
        <div className="card p-5 shadow ">
        <form onSubmit={submitHandler}>
          <div className='form-group card-body'>
            <h1>Shipping Address</h1>
          </div>
          <div className="form-group font-weight-bold">
            <label  htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter full name"
              value={fullName}
              className='form-control'
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="form-group font-weight-bold">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              placeholder="Enter address"
              value={address}
              className='form-control'
              onChange={(e) => setAddress(e.target.value)}
              required
            ></input>
          </div>
          <div className="form-group font-weight-bold">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              placeholder="Enter city"
              value={city}
              className='form-control'
              onChange={(e) => setCity(e.target.value)}
              required
            ></input>
          </div>
          <div className="form-group font-weight-bold">
            <label htmlFor="postalCode">Postal Code:</label>
            <input
              type="text"
              id="postalCode"
              placeholder="Enter postal code"
              value={postalCode}
              className='form-control'
              onChange={(e) => setPostalCode(e.target.value)}
              required
            ></input>
          </div>
          <div className="form-group font-weight-bold">
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              id="country"
              className='form-control'
              placeholder="Enter country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            ></input>
          </div>
         
            <button className="btn btn-warning btn-block  border border-dark font-weight-bold" type="submit">
              Continue
            </button>
          
        </form>
        </div>
        </div>
      </div>
    );
  }