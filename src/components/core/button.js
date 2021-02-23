import React from "react";

const Buttons = () => {

    const buttonData = [
        {image:'Group 31.png' ,name :'Post Ad'},
        {image:'aston-martin-dbc-concept-cars-wallpaper-preview.png',name :'Vehicles'},
        {image:'istockphoto-171379069-612x612.png',name :'Property'},
        {image:'43e2b4a09d971914edb6b5e042a8cffb.png',name :'Mobile Phone & Tablets'},
        {image:'depositphotos_25584587-stock-photo-tv-set-isolated-on-white.png',name :'Electronics'},
        {image:'furniture-appliances-illustration-white-background-32022796.png',name :'Home Furniture'},
        {image:'health-beauty-vector-icons-clip-art-health-beauty-vector-icons-clip-art-set-simple-routine-objects-image-110559985.png',name :'Health & Beauty'},
        {image:'c1fa5dbfd746413a78de5f407548647a.png',name :'Fashion'},
        {image:'three-boxes-full-sport-equipments-white-background_1308-40708.png',name :'Sports & Outdoors'},
        {image:'depositphotos_140115380-stock-photo-group-of-cute-pets.png',name :'Animals & Pets'},
        {image:'isometric-set-with-people-searching-job-white-background-3d_1284-31073.png',name :'Seeking Works & CVs'},
        {image:'vector-businessman-shaking-hands-on-a-signed-contract-isolated-on-white-background.png',name :'Services'},
        {image:'weathergoods-urban-satchel-bicycle-bag-back-a.png',name :'Jobs'},
        {image:'baby-kids-white-wallpaper-preview.png',name :'Baby & Kids'},
        {image:'800px_COLOURBOX2613035.png',name :'Agriculture & Foods'},
        {image:'depositphotos_209483020-stock-photo-set-hand-tools-power-tools.png',name :'Equipments & Tools'},
        {image:'construction-tools-white-background-collection-construction-tools-construction-repair_99433-2463.png',name :'Repair & Constructions'},
    ];

  return (
    <div className=""> 
      <div className="  mb-3 d-flex flex-wrap container">
        { buttonData.map((image,index) => (
            <div
          className="m-2 pt-4  bg-white shadow border  "
          style={{ height: "170px", width: "137px" }}
          key={index}
        >
          <img
            className="rounded mx-auto d-block"
            alt=""
            src={`${process.env.PUBLIC_URL}/images/${image.image}`}
          />
          <p className="text-center text-danger overflow-hidden font-weight-bold">{image.name}</p>
        </div>
        )) }
       
      </div>
    </div>
  );
};

export default Buttons;
