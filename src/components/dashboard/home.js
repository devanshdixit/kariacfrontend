import React from 'react';
import Base from '../core/Base';

const  HomePage = ( )  => {
    return (
      <Base  description="Welcome to the Tshirt Store">
     <div className="container mt-3">
      <div className="card-columns ">
      {/* {categories != null ? categories.map( (category,index) => (
        
          <div key={index} className="card " style={{height:"10px !important",overflow:"hidden !important"}}>
      <Link  className="" to={`/category/${category.cat_id}`}> <ProductImage product={category.cat_id} /></Link>
      <h5 className="card-title pt-2 text-danger font-weight-bold text-center">{category.cat_name}</h5>       
          </div>
      )) : null} */}
      </div>
    </div>
    </Base> 
    );
}

export default HomePage;