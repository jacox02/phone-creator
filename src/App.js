import React, { useState } from "react";
import Pizarra from "./Components/PizarraComponent";

const phonesArr = [
  {
    id: 0,
    name: "iPhone",
    model: "7",
    screen: '5.5"',
    storage: "128 gb",
    battery: "1250 mAh",
  },
];

function App() {
  const [phones, setPhones] = useState([
    {
      id: 0,
      name: "iPhone",
      model: "7",
      screen: '5.5"',
      storage: "128 gb",
      battery: "1250 mAh",
    },
  ]);
  return (
    <div className="App">
      <Pizarra phoneArr={phonesArr}></Pizarra>
    </div>
  );
}

export default App;
