
import React, { useState, useEffect } from 'react';
import { API } from '../../backend';


const ItemCurrency = ({product}) => {

    const [currency,setCurrency] = useState();
    useEffect(() => {
        getItem().then((data) => {
       data.data.map((itemcurrency,index) => {
            setCurrency(itemcurrency.currency_symbol);
       } ) 
    }); },[]);
    
     const getItem = () => {
        return fetch(`${API}/product/${product.item_currency_id}` ,{
          method: "GET",
        })
        .then(response => {
            return response.json();
                })
        .catch(err => console.log(err));
      };
      
return (
   
   <p className='text-danger font-weight-bold'>{currency}{product.price}</p>
         
);
};

export default ItemCurrency;