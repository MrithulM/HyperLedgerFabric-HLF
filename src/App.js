import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import { useState } from "react";
import CarModel from "./components/CarModel/CarModel";
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

  return (
    <>
      {carModalActive ? (
        <CarModel carModalClose={carModalClose} clickedCar={clickedCar} />
      ) : (
        ""
      )}
      <Navbar addScreenHandler={addScreenHandler} />
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
