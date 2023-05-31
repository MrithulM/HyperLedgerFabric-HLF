import React, { useState } from "react";
import "./Navbar.css";
import AddCarImg from "../../media/add_car_blue.png";
import DeleteCarImg from "../../media/delete_car_blue.png";
import ChangeOwnerImg from "../../media/change_owner.png";
import AddCarWhite from "../../media/add_car_white.png";
import DeleteCarWhite from "../../media/delete_car_white.png";
import ChangeOwnerWhite from "../../media/change_owner_white.png";
import TransactionLogs from "../../media/transaction_blue.png";
import TransactionLogsWhite from "../../media/transaction_white.png";
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
              setCurrentHover(e.target.className.split(" ")[1]);
            }}
            onMouseLeave={() => {
              setCurrentHover("");
            }}
            onClick={() => {
              props.addScreenHandler();
              setCurrentHover("");
              setPopupActive((popupActive) => !popupActive);
              setAdminUtilsActive((adminUtilsActive) => !adminUtilsActive);
            }}
          >
            Add a Car
            {currentHover !== "c1" ? (
              <img src={AddCarImg} alt="add-car"></img>
            ) : (
              <img src={AddCarWhite} alt="add-car"></img>
            )}
          </button>
          <div className="border-line"></div>
          <button
            className="nav-choice c2"
            onMouseEnter={(e) => {
              setCurrentHover(e.target.className.split(" ")[1]);
            }}
            onMouseLeave={() => {
              setCurrentHover("");
            }}
            onClick={() => {
              props.deleteCarHandler();
              setPopupActive((popupActive) => !popupActive);
              setAdminUtilsActive((adminUtilsActive) => !adminUtilsActive);
            }}
          >
            Delete a Car
            {currentHover !== "c2" ? (
              <img src={DeleteCarImg} alt="delete-car"></img>
            ) : (
              <img src={DeleteCarWhite} alt="delete-car"></img>
            )}
          </button>
          <div className="border-line"></div>
          <button
            className="nav-choice c3"
            onMouseEnter={(e) => {
              setCurrentHover(e.target.className.split(" ")[1]);
            }}
            onMouseLeave={() => {
              setCurrentHover("");
            }}
            onClick={() => {
              props.changeOwnerHandler();
              setPopupActive((popupActive) => !popupActive);
              setAdminUtilsActive((adminUtilsActive) => !adminUtilsActive);
            }}
          >
            Change Owner
            {currentHover !== "c3" ? (
              <img src={ChangeOwnerImg} alt="change-owner"></img>
            ) : (
              <img src={ChangeOwnerWhite} alt="change-owner"></img>
            )}
          </button>
          <div className="border-line"></div>
          <button
            className="nav-choice c4"
            onMouseEnter={(e) => {
              setCurrentHover(e.target.className.split(" ")[1]);
              console.log(currentHover);
            }}
            onMouseLeave={() => {
              setCurrentHover("");
            }}
            onClick={() => {
              props.transactionLogsHandler();
            }}
          >
            Transaction logs
            {currentHover !== "c4" ? (
              <img src={TransactionLogs} alt="change-owner"></img>
            ) : (
              <img src={TransactionLogsWhite} alt="change-owner"></img>
            )}
          </button>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
}
