import React, { useState } from "react";
import "./Navbar.css";
import AddCarImg from "../../media/add_car_blue.png";
import DeleteCarImg from "../../media/delete_car_blue.png";
import ChangeOwnerImg from "../../media/change_owner.png";
import AddCarWhite from "../../media/add_car_white.png";
import DeleteCarWhite from "../../media/delete_car_white.png";
import ChangeOwnerWhite from "../../media/change_owner_white.png";
export default function Navbar(props) {
  const [adminUtilsActive, setAdminUtilsActive] = useState(false);
  const [popupActive, setPopupActive] = useState(false);
  const [adminAnimationActive, setAdminAnimationActive] = useState(false);
  const [currentHover, setCurrentHover] = useState("");
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
      </div>
      {popupActive ? (
        <div className={`choices`}>
          <div className="util-title">
            <h4>Admin Utils</h4>
          </div>
          <button
            className="nav-choice c1"
            onMouseEnter={(e) => {
              console.log(e);
            }}
            onClick={() => {
              props.addScreenHandler();
              setPopupActive((popupActive) => !popupActive);
              setAdminUtilsActive((adminUtilsActive) => !adminUtilsActive);
            }}
          >
            Add a Car
            <img src={AddCarImg} alt="add-car"></img>
          </button>
          <div className="border-line"></div>
          <button
            className="nav-choice"
            onClick={() => {
              props.deleteCarHandler();
              setPopupActive((popupActive) => !popupActive);
              setAdminUtilsActive((adminUtilsActive) => !adminUtilsActive);
            }}
          >
            Delete a Car
            <img src={DeleteCarImg} alt="delete-car"></img>
          </button>
          <div className="border-line"></div>
          <button
            className="nav-choice"
            onClick={() => {
              props.changeOwnerHandler();
              setPopupActive((popupActive) => !popupActive);
              setAdminUtilsActive((adminUtilsActive) => !adminUtilsActive);
            }}
          >
            Change Owner
            <img src={ChangeOwnerImg} alt="add-car"></img>
          </button>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
}
