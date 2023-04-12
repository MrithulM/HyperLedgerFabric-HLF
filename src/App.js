import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import { useState } from "react";
function App() {
  const [addScreenActive, setAddScreenActive] = useState(false);
  const addScreenHandler = () => {
    setAddScreenActive(true);
  };
  return (
    <>
      <Navbar addScreenHandler={addScreenHandler} />
      <Menu
        addScreenActive={addScreenActive}
        setAddScreenActive={setAddScreenActive}
      />
    </>
  );
}

export default App;
