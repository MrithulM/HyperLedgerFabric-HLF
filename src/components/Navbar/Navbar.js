import React from "react";
import "./Navbar.css";
export default function Navbar(props) {
  return (
    <nav>
      <div className="navbar">
        <h2 className="title">Hyperledger Fabric</h2>
        <button onClick={props.addScreenHandler}>Add a Car</button>
      </div>
    </nav>
  );
}
