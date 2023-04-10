import React, { useState } from "react";
import axios from "axios";
import DisplayCarInfo from "../DisplayCarInfo/DisplayCarInfo";
import "./Menu.css";
import AddCar from "../AddCar/AddCar";

export default function Menu(props) {
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
      setCarId("");
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
  const changeOwnerHandler = async () => {
    const newOwner = prompt("Enter new owner name:");
    try {
      await axios.put(
        `http://4.246.223.78:8080/api/changeowner/${carId.toUpperCase()}`,
        {
          owner: newOwner,
        }
      );
      alert("owner updated");
      setCarId("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="menu-container">
      {props.addScreenActive ? <AddCar /> : <></>}
      <div className="input-container">
        <input
          type="text"
          value={carId}
          placeholder="Enter car ID"
          onChange={carIdInputHandler}
        />
        <button onClick={searchCarHandler}>Search By ID</button>
        <button onClick={searchCars}>Search all</button>
        <button onClick={changeOwnerHandler}>Change Owner</button>
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
