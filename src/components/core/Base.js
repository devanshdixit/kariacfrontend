import React from "react";
import Buttons from "./button";
import Footer from "./Footer";
import Menu from "./Menu";
import Search from "./search";

// navcolor - #ffffff
// body - #fafafa

const Base = ({ title, className, children }) => (

  <div className={className}>
    <Menu />
    <Search/>
    <Buttons />
    {children}
    <Footer />
    </div>
);

export default Base;
