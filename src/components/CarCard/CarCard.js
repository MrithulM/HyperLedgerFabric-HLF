import React, { useState } from "react";
import "./CarCard.css";

export default function CarCard(props) {
  const [touchActive, setTouchActive] = useState(false);
  const { img, color, docType, make, model, owner } = props.record;
  console.log(touchActive);
  return (
    <>
      {
        <div className={`card`}>
          <div className="details-container">
            <div className="poster-container">
              <img
                src={img}
                alt="car"
                className={`${props.id} carImage`}
                onMouseEnter={(e) => {
                  setTouchActive(true);
                }}
                onMouseLeave={() => {
                  setTouchActive(false);
                }}
              />
              <div
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
      }
    </>
  );
}
