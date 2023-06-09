import React from "react";
import "./CarModel.css";
export default function CarModel(props) {
  const closeCarModel = () => {
    props.carModalClose();
  };
  const { id, logo, img, docType, color, make, model, owner } =
    props.clickedCar;
  return (
    <div className="car-model-bd">
      <div className="car-model-holder">
        <div className="car-data-container">
          <div className="modal-img-holder">
            <img className={`${id}-modal-img`} src={img} alt="car" />
          </div>
          <div className="car-model-details-container">
            <div className="model-header">
              <div
                // className="color-bar"
                style={{
                  background:
                    color.toLowerCase() !== "white" ? `${color}` : "#D4D4D4",
                  filter: "saturate(0.7)",
                  width: "100%",
                  height: "60px",
                  transform: "translateX(-500px)",
                  WebkitAnimation: "color-bar-slide 500ms 100ms forwards",
                  zIndex: "2",
                  position: "relative",
                }}
              >
                <div className="ribbon-end"></div>
              </div>
              <img className="logo" src={logo} alt="" />
            </div>
            <div className="modal-content">
              <div className="modal-props">
                <p>Color: {color}</p>
                <p>Type: {docType}</p>
                <p>Make: {make}</p>
                <p>Model: {model}</p>
                <p>Owner: {owner}</p>
              </div>
              <div className="modal-button-holder">
                <button onClick={closeCarModel}>Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
