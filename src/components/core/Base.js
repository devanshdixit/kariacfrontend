import React from "react";

// navcolor - #ffffff
// body - #fafafa

const Base = ({ title, className, children }) => (
  <div >
    <div className={className}>{children}</div>
  </div>
);

export default Base;
