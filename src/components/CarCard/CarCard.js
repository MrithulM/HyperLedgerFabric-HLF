import React from "react";
import "./CarCard.css";

export default function CarCard(props) {
  const { img, color, docType, make, model, owner } = props.record;
  const id = props.id.toUpperCase();
  return (
    <>
      {
        <div className="card">
          <h4>{id}</h4>
          <div className="details-container">
            <img src={img} alt="" className="carImage" />
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
          </div>
        </div>
      }
    </>
  );
}
