import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import { useState } from "react";
import CarModel from "./components/CarModel/CarModel";
import axios from "axios";
import TransactionModal from "./components/Transaction/TransactionModal";
function App() {
  const [addScreenActive, setAddScreenActive] = useState(false);
  const [carModalActive, setcarModelActive] = useState(false);
  //CarId of the active car CLICKED
  const [clickedCar, setClickedCar] = useState("");
  const [transaction, setTransaction] = useState(null);
  const [transactionActive, setTransactionActive] = useState(false);
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
      window.location.reload();
    } catch (err) {
      alert(err.response.data);
    }
  };
  const changeOwnerHandler = async () => {
    const carId = prompt("Specify the CARID:");
    if (carId.trim() === "") {
      alert("Enter an ID value!");
      return;
    }
    const newOwner = prompt("Enter new owner name:");
    try {
      await axios.put(
        `http://4.246.223.78:8080/api/changeowner/${carId.toUpperCase()}`,
        {
          owner: newOwner,
        }
      );
      alert("owner updated");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  const transactionLogsHandler = async () => {
    setTransactionActive(true);
    try {
      const res = await axios.get(
        "http://4.246.223.78:8080/api/fetchtransaction"
      );
      setTransaction(JSON.parse(res.data.response));
    } catch (error) {
      console.log(error);
    }
  };
  const closeTransactionHandler = () => {
    setTransactionActive(false);
  };
  return (
    <>
      {transactionActive && transaction ? (
        <TransactionModal
          transactions={transaction}
          closeTransaction={closeTransactionHandler}
        />
      ) : (
        ""
      )}
      {carModalActive ? (
        <CarModel carModalClose={carModalClose} clickedCar={clickedCar} />
      ) : (
        ""
      )}
      <Navbar
        addScreenHandler={addScreenHandler}
        deleteCarHandler={deleteCarHandler}
        changeOwnerHandler={changeOwnerHandler}
        transactionLogsHandler={transactionLogsHandler}
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
