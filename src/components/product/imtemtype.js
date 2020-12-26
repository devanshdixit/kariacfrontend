
import React, { useState, useEffect } from 'react';
import { API } from '../../backend';


const ItemType = ({product}) => {

    const [type,setType] = useState();
    useEffect(() => {
        getItem().then((data) => {
       data.data.map((itemtype,index) => {
           setType(itemtype.name);
       } ) 
    }); },[]);
    
     const getItem = () => {
        return fetch(`${API}/product/itemtype/${product.item_type_id}` ,{
          method: "GET",
        })
        .then(response => {
            return response.json();
                })
        .catch(err => console.log(err));
      };
      
return (
    
   <p className='font-weight-bold text-success'>{type}</p>
       
);
};

export default ItemType;