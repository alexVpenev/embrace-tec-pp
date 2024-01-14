import React, { Component, useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import { UserData } from "./Data";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.date),
    datasets: [
      {
        label: "Dont Know",
        data: UserData.map((data) => data.weight),
      },
    ],
  });

  return (
    <div className="App">
      <h1>Hello</h1>
      <h1>Hello</h1>
      <BarChart chartData={userData} />
    </div>
  );
}

export default App;
