import React from "react";
import { Link } from "react-router-dom";

export default function Product(props) {
  const { product } = props;

  return (
    <div key={product._id} className="card productcard border">
      <Link to={`/product/${product._id}`} className=" stretched-link">
          <img
            src={product.image}
            alt={product.name}
            width="100%"
            height="100%"
            className=" mx-auto d-block img-thumbnail"
          />
      </Link>
      <div className="p-2">
      <ul className="list-group list-group-flush">
      <li className="list-group-item border border-0 productcard ">
                    <h4 className="d-inline-flex justify-content-center font-weight-bold ">  {product.name}</h4>
                  </li>
                  <li className="list-group-item border border-0 productcard ">
                    <p className="d-inline-flex justify-content-center font-weight-bold ">Price :</p>
                    <p className="d-inline-flex justify-content-center font-weight-bold text-danger">
                      {product.currency_symbol}
                      {product.price}
                    </p>
                  </li>
                  <li className="list-group-item border border-0 productcard ">
                    <p className="d-inline-flex justify-content-center font-weight-bold ">Location :</p>
                    <p className="d-inline-flex justify-content-center font-weight-bold">
                    {product.itemLocation}
                    </p>
                  </li>
                  <li className="list-group-item border border-0 productcard ">
                    <p className="d-inline-flex justify-content-center font-weight-bold ">Type :</p>
                    <p className="d-inline-flex justify-content-center font-weight-bold">
                    {product.itemtype}
                    </p>
                  </li>
        </ul>

       
      </div>
    </div>
  );
}

// import React, { useState, useEffect } from "react";
// import ItemType from "./imtemtype";
// import ItemCurrency from "./itemcurrency";
// import ItemLocation from "./itemlocation";
// import ProductImage from "./productimage";
// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// // added_date: "2020-08-25T19:18:40.000Z"
// // added_user_id: "usr1b5495537788386b9cdeb21fe444f6d6"
// // address: ""
// // brand: ""
// // business_mode: 0
// // cat_id: "catc64332df32faf3de5b58e811e96b1472"
// // condition_of_item_id: "1"
// // deal_option_id: "1"
// // deal_option_remark: ""
// // description: "phone is in good condition"
// // favourite_count: 0
// // highlight_info: ""
// // id: "itm_fa159dce5facc1bc28af128941348dac"
// // is_paid: 0
// // is_sold_out: 0
// // item_currency_id: "itm_curencye14f08343f2d93328ce5caf1a72a7494"
// // item_location_id: "itm_locc91e7fd5ffc739b26951228b0a564569"
// // item_price_type_id: "2"
// // item_type_id: "4"
// // lat: 34.508499
// // lng: 34.508499
// // price: 20
// // status: 0
// // sub_cat_id: "subcatc4b6928dd0ba7f1f4ffc5a4588cea59e"
// // title: "camon cx air"
// // touch_count: 0
// // updated_date: "2020-12-03T01:45:35.000Z"
// // updated_flag: 0
// // updated_user_id: "usr

// const ProductCard = ({ product, index }) => {
//   const [productdetails, setProduct] = useState([]);

//   const { t } = useTranslation();

//   useEffect(() => {
//     setProduct(product);
//   }, []);

//   return (
//     <div key={index} className="card ">
//       <Link to={`/product/`} className="">
//         <ProductImage product={product.id} />
//         <h5 className="card-title pt-2 text-danger font-weight-bold text-center">
//           {productdetails.title}
//         </h5>
//       </Link>
//       <div className="card-body">
//         <div className=" d-inline-flex ">
//           <div className="p-2 ">
//             <ItemCurrency product={product} />
//           </div>
//           <div className="p-2 ">
//             <ItemLocation product={product} />
//           </div>
//           <div className="p-2 ">
//             <ItemType product={product} />
//           </div>
//         </div>
//         <button type="button" className="btn btn-danger float-right">
//           {t("Add to cart")}
//         </button>
//       </div>
//     </div>
//   );
// };
// export default ProductCard;
