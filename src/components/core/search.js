import React from "react";

const Search = () => {
  return (
    <div className="container-fluid">
    <div
      className="row  "
      style={{  backgroundColor: "#8AB5BE" }}
    >
      <div className="col-md-3 d-none d-lg-block">
        <img
          className=" d-block img-fluid float-right"
          src={`${process.env.PUBLIC_URL}/images/Mask Group 1.png`}
          alt=""
        />
      </div>
      <div className="col-md-7" >
        <div className="" style={{padding:"10%"}}>
          <form className="example " action="">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>
      <div className="col-sm-2 d-none d-lg-block">
     
      </div>
    </div>
    </div>
  );
};

export default Search;
