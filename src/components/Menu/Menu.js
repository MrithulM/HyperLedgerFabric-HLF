import React, { useState } from "react";
import axios from "axios";
import DisplayCarInfo from "../DisplayCarInfo/DisplayCarInfo";
import "./Menu.css";

export default function Menu() {
  const [searchCar, setSearchCar] = useState(false);
  const [searchAll, setSearchAll] = useState(false);
  const [carInfo, setCarInfo] = useState({});
  const [carId, setCarId] = useState(null);
  const [carKey, setCarKey] = useState(null);

  const carIdInputHandler = (e) => {
    setCarId((carId) => e.target.value);

    console.log(carId);
  };

  const searchCarHandler = async () => {
    setCarKey(carId);
    setSearchCar(true);
    setSearchAll(false);
    try {
      const obj = await axios.get(
        `http://4.246.223.78:8080/api/query/${carId.toUpperCase()}`
      );
      setCarInfo((carInfo) => JSON.parse(obj.data.response));
    } catch (err) {
      console.log(err);
    }
  };
  const searchCars = async () => {
    setSearchAll(true);
    setSearchCar(false);
    try {
      const obj = await axios.get("http://4.246.223.78:8080/api/queryAllCars");
      setCarInfo((carInfo) => JSON.parse(obj.data.response));
      console.log(carInfo);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="menu-container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter car ID"
          onChange={carIdInputHandler}
        />
        <button onClick={searchCarHandler}>Search By ID</button>
        <button onClick={searchCars}>Search all</button>
      </div>
      <div></div>
      <DisplayCarInfo
        carId={carKey}
        carInfo={carInfo}
        searchAll={searchAll}
        searchCar={searchCar}
      />
    </div>
  );
}
