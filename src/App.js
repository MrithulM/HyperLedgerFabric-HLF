import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import { useState } from "react";
import CarModel from "./components/CarModel/CarModel";
import axios from "axios";
function App() {
  const [addScreenActive, setAddScreenActive] = useState(false);
  const [carModalActive, setcarModelActive] = useState(false);
  //CarId of the active car CLICKED
  const [clickedCar, setClickedCar] = useState("");
  const addScreenHandler = () => {
    setAddScreenActive(true);
  };
  const carModalOpen = () => {
    setcarModelActive(true);
  };
  const carModalClose = () => {
    setcarModelActive(false);
  };
  const deleteCarHandler = async () => {
    const carID = prompt("Enter the carID to delete:");
    if (carID.trim() === "") {
      alert("ID not valid!");
      return;
    }
    try {
      await axios.delete(
        `http://4.246.223.78:8080/api/deletecar/${carID.toUpperCase()}`
      );
      alert("Car deleted!");
      window.refresh();
    } catch (err) {
      alert(err.response.data);
    }
  };

  return (
    <>
      {carModalActive ? (
        <CarModel carModalClose={carModalClose} clickedCar={clickedCar} />
      ) : (
        ""
      )}
      <Navbar
        addScreenHandler={addScreenHandler}
        deleteCarHandler={deleteCarHandler}
      />
      <Menu
        addScreenActive={addScreenActive}
        setAddScreenActive={setAddScreenActive}
        carModalOpen={carModalOpen}
        setClickedCar={(value) => {
          setClickedCar(value);
        }}
      />
    </>
  );
}

export default App;
