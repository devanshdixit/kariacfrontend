import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { trackorder } from '../actions/orderActions';
import Base from '../components/core/Base';
import LoadingBox from '../components/LoadingBox';

export default function Tracking(props) {
    const orderId = props.match.params.id;
    const trackDetails = useSelector((state) => state.trackOrder);
    const { loading , order } = trackDetails;
    //const shipment = order.trackResponse.shipments;
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(trackorder(orderId));
    }, [dispatch,orderId]);
    return loading ? (
        <Base>
        <LoadingBox></LoadingBox>
        </Base>
      ) : (
          <Base>
        <div className='container '>
        <div className='mt-5'>
            <h1 className='text-dark font-weight-bold text-center' >Track your Package</h1>
            <h2 className='text-dark font-weight-bold'>Shipments: {order.shipmentsLength}</h2>
            {order.package.map((packages,index) => (
                <>
                <h3 key={index}>Package: {index + 1}</h3>
                <ul className="list-group list-group-flush ">
                    {packages.activity.map((activ,index)=> (
                        <li key={index}  className=" list-group-item list-group-item-danger font-weight-bold text-center">{activ.status.description}</li>
                    ))}
                </ul>
                </>
            ))}
        </div>
        </div>
        </Base>
    );
}