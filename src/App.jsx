import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Clock from "./Clock";
import Timer from "./Timer";

function App() {

  return (
    <div className="container">    

      <Clock selectedCity="London"  selectedTimeZone="Europe/London"/>

      <Clock selectedCity="Paris" selectedTimeZone="Europe/Paris"/>

      <Timer startTime="600"/>
      <Timer startTime="200"/>
      <Timer startTime="400"/>
      <Timer startTime="10"/>

    </div>
    
  )
}

export default App;
