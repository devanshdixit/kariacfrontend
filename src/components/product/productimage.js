import React, { useState, useEffect } from "react";
import { API } from "../../backend";

const ProductImage = ({ product }) => {
  //  const imageurl = product ? `product/photo/${product._id}` : 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'
  const [imageurl, setImageurl] = useState();
  useEffect(() => {
    getItem().then((data) => {
      data.data.map((imagedata, index) => {
        if (index === 0) {
          var str1 = "http://data.kariac.com/uploads/thumbnail/";
          var str2 = imagedata.img_path;
          var res = str1.concat(str2);
          return setImageurl(res);
        }
      });
    });
  }, []);

  const getItem = () => {
    if (typeof product.id !== undefined) {
      return fetch(`${API}/product/imagelocation/${product}`, {
        method: "GET",
      })
        .then((response) => {
          return response.json();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="rounded border ">
      <img
        src={`${imageurl}`}
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="rounded card-img-top "
      />
    </div>
  );
};

export default ProductImage;
