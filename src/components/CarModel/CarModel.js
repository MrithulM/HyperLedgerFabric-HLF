import React, { useEffect } from "react";
import "./CarModel.css";
export default function CarModel(props) {
  const closeCarModel = () => {
    props.carModalClose();
  };
  const { img, docType, color, make, model, owner } = props.clickedCar;
  return (
    <div className="car-model-bd">
      <div className="car-model-holder">
        <div>
          <div className="modal-img-holder">
            <img
              src={img}
              alt="car"
              style={{ height: "200px", width: "300px" }}
            />
          </div>
          <div>
            <div>
              <div className="color-bar"></div>
              <div>
                <p>{props.carID}</p>
                {/* <p>Color: {color}</p>
                <p>Type: {docType}</p>
                <p>Make: {make}</p>
                <p>Model: {model}</p>
                <p>Owner: {owner}</p> */}
              </div>
            </div>
            <div className="button-holder">
              <button onClick={closeCarModel}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
