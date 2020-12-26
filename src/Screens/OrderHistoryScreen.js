import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listOrderMine } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function OrderHistoryScreen(props) {
  const orderMineList = useSelector((state) => state.orderMineList);
  const { loading, error, orders } = orderMineList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listOrderMine());
  }, [dispatch]);
  return (
    <div className ='container p-5'>
      <h1>Order History</h1>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}<Link to={props.match.path}>refresh</Link></MessageBox>
      ) : (
        <div className="table-responsive">

        <table className=" table table-dark table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th>ACTIONS</th>
              <th>TRACK</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
               
              <tr key={order.orderId}>
                <td>{order.orderId}</td>
                <td>{order.totalPrice}</td>
                <td>{order.isPaid ? 'Yes' : 'No'}</td>
                <td>
                  {order.isDelivered
                    ? 'Yes'
                    : 'No'}
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => {
                      props.history.push(`/order/${order.orderId}`);
                    }}
                  >
                    Details
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => {
                      props.history.push(`/order/${order.orderId}`);
                    }}
                  >
                    Track Package
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
    </div>
  );
}
