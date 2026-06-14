import React from "react";
import home1 from "./assets/home1.jpg";
import "./Prac.css";

const Prac = () => {
  return (
    <div className="main">
      <div className="content">
        <img src={home1} alt="" style={{ width: "100px" }} />
        <h1>Ecoomerce Website</h1>
      </div>

      <div className="content">
        <img src={home1} alt="" style={{ width: "100px" }} />
        <h1>Ecoomerce Website</h1>
      </div>

      <div className="content">
        <img src={home1} alt="" style={{ width: "100px" }} />
        <h1>Ecoomerce Website</h1>
      </div>

      <div className="content">
        <img src={home1} alt="" style={{ width: "100px" }} />
        <h1>Ecoomerce Website</h1>
      </div>
    </div>
  );
};

export default Prac;
