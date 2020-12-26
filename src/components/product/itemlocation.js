
import React, { useState, useEffect } from 'react';
import { API } from '../../backend';


const ItemLocation = ({product}) => {

    const [location,setLocation] = useState();
    useEffect(() => {
        getItem().then((data) => {
       data.data.map((itemlocation,index) => {
           setLocation(itemlocation.name);
          
       } ) 
    }); },[]);
    
     const getItem = () => {
        return fetch(`${API}/product/itemlocation/${product.item_location_id}` ,{
          method: "GET",
        })
        .then(response => {
            return response.json();
                })
        .catch(err => console.log(err));
      };
      
return (
   <p className='font-weight-bold text-primary'>{location}</p>
);
};

export default ItemLocation;