import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import { useState } from "react";
function App() {
  const [addScreenActive, setAddScreenActive] = useState(false);
  const addScreenHandler = () => {
    setAddScreenActive(true);
  };
  console.log(addScreenActive);
  return (
    <>
      <Navbar addScreenHandler={addScreenHandler} />
      <Menu addScreenActive={addScreenActive} />
    </>
  );
}

export default App;
