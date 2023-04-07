import React from "react";
import "./CarCard.css";

export default function CarCard(props) {
  const { color, docType, make, model, owner } = props.record;
  const id = props.id.toUpperCase();
  return (
    <>
      {
        <div className="card">
          <h4>{id}</h4>
          <div className="details-container">
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
