import React, { useState } from "react";
import "./CarCard.css";
import CarModel from "../CarModel/CarModel";

export default function CarCard(props) {
  const [touchActive, setTouchActive] = useState(false);
  const { img, color, docType, make, model, owner, isNew } = props.record;
  return (
    <>
      <div className={`card`}>
        <div className="details-container">
          {isNew ? (
            <div class="ribbon ribbon-top-left">
              <span>NEW!</span>
            </div>
          ) : (
            ""
          )}

          <div className="poster-container">
            <img
              src={img}
              alt="car"
              className={`${props.id} carImage ${
                touchActive ? "car-hover-active" : ""
              }`}
              onClick={(e) => {
                props.setClickedCar({ id: props.id, ...props.record });
                props.carModalOpen();
              }}
              onMouseEnter={() => {
                setTouchActive(true);
              }}
              onMouseLeave={() => {
                setTouchActive(false);
              }}
            />
            {touchActive ? (
              <>
                <div className="info-icon">
                  <i class="fa-solid fa-circle-info"></i>
                </div>
                <div className="bubble">{props.id.toUpperCase()}</div>
              </>
            ) : (
              ""
            )}
            <div
              style={{ pointerEvents: "none" }}
              className={`model-backdrop ${touchActive ? "touchActive" : ""}`}
            ></div>
          </div>
          {/* <div className={`prop-container`}>
              <div>
                <p>Color: {color}</p>
                <p>Type: {docType}</p>
              </div>
              <div>
                <p>Make: {make}</p>
                <p>Model: {model}</p>
              </div>
              <div>
                <p>Owner: {owner}</p>
              </div>
            </div> */}
        </div>
      </div>
    </>
  );
}
