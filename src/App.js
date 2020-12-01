import React, { useState } from "react";
import Pizarra from "./Components/PizarraComponent";

function App() {
  const phonesArray = [
    {
      id: 0,
      name: "iPhone",
      model: "7+",
      screen: '5.5"',
      storage: "128 gb",
      battery: "1250 mAh",
    },
    {
      id: 1,
      name: "iPhone",
      model: "+",
      screen: '5.5"',
      storage: "256 gb",
      battery: "1250 mAh",
    },
    {
      id: 2,
      name: "iPhone",
      model: "7",
      screen: '5.5"',
      storage: "128 gb",
      battery: "1250 mAh",
    },
    {
      id: 3,
      name: "iPhone",
      model: "12 Pro Max",
      screen: '6.5"',
      storage: "256 gb",
      battery: "1250 mAh",
    },
  ];
  const [phones, setPhones] = useState(phonesArray);
  return (
    <div className="App">
      <Pizarra phoneArr={phones} addPhone={setPhones}></Pizarra>
    </div>
  );
}

export default App;
