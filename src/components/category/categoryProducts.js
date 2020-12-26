import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { getSubcategoryProducts } from "./helper";
import ProductCard from "../product/productcard";

const CategoryProduct = (data) => {
  const [subcategoryProducts, setSubCategoryProducs] = useState([]);
  const subcategoryid = data.match.params.subcategoryid;
  const categoryid = data.match.params.categoryid;
  const preload = () => {
    getSubcategoryProducts(subcategoryid, categoryid).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        if (typeof data.data !== undefined) {
          console.log(data.data);
          setSubCategoryProducs(data.data);
        }
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  return (
    <Base title="Products" description="Welcome to the Tshirt Store">
      <div className="container mt-3">
        <div className="card-columns">
          {subcategoryProducts.length !== 0 ? (
            subcategoryProducts.map((subcategoryproduct, index) => (
              <div key={index}>
                <ProductCard product={subcategoryproduct} />{" "}
              </div>
            ))
          ) : (
            <div>
              <h1>No Products...</h1>
            </div>
          )}
        </div>
      </div>
    </Base>
  );
};

export default CategoryProduct;
