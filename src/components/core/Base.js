import React from "react";
import Menu from "./Menu";

// navcolor - #ffffff
// body - #fafafa

const Base = ({
  className ,
  children
}) => (
    
  <div >
  <Menu />
  
      <div className={className}>{children}</div>

   
  </div>
  
);

export default Base;
