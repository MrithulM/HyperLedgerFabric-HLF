import React from "react";
import "./Navbar.css";
export default function Navbar(props) {
  return (
    <nav>
      <div className="navbar">
        <h2 className="title">Hyperledger Fabric</h2>
        <div className="admin-functions">
          <button onClick={props.addScreenHandler}>Add a Car</button>
          <button onClick={props.deleteCarHandler}>Delete Car</button>
        </div>
      </div>
    </nav>
  );
}
