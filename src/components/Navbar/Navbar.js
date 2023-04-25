import React, { useState } from "react";
import "./Navbar.css";
export default function Navbar(props) {
  const [adminUtilsActive, setAdminUtilsActive] = useState(false);
  const [popupActive, setPopupActive] = useState(false);
  const [adminAnimationActive, setAdminAnimationActive] = useState(false);
  return (
    <nav>
      <div className="navbar">
        <h2 className="title">Hyperledger Fabric</h2>
        {popupActive ? (
          <div
            className="close-container"
            onClick={() => {
              setPopupActive((popupActive) => !popupActive);
            }}
          >
            <i class="fa-solid fa-xmark"></i>
          </div>
        ) : (
          <div
            className={`admin-functions`}
            onMouseEnter={() => {
              setAdminUtilsActive((adminUtilsActive) => !adminUtilsActive);
            }}
            onMouseLeave={() => {
              setAdminUtilsActive((adminUtilsActive) => !adminUtilsActive);
            }}
            onClick={() => {
              setPopupActive(true);
              setAdminAnimationActive(
                (adminAnimationActive) => !adminAnimationActive
              );
            }}
          >
            {adminUtilsActive ? <p>Admin utils</p> : <div></div>}
            <i class={`fa-solid fa-user-lock`}></i>
          </div>
        )}
        {/* <button onClick={props.addScreenHandler}>Add a Car</button>
          <button onClick={props.deleteCarHandler}>Delete Car</button> */}
      </div>
    </nav>
  );
}
