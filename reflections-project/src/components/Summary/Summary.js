import React from "react";
import Scoreboard from "./Scoreboard/Scoreboard";
import StatsCard from "./StatsCard";
import { useState, useEffect } from "react";
import "./Summary.css";

function Summary() {
  //a streak feature using count number (3+)
  // function inputStreak {
  //   //Break down the data object into a few more variables
  //   //Use the variables for comparison

  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=6");
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setUsers(userData.results);
    })();
  }, []);

  return (
    <div className="summary">
      <h1>Reflections Summary</h1>
      <div className="cards-container">
        {users.length > 0
          ? users.map((user, index) => (
              <StatsCard userData={user} key={index} />
            ))
          : ""}
        {/* <Scoreboard /> */}
      </div>
    </div>
  );
}

export default Summary;
