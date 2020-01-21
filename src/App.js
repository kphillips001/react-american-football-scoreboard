  
//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [lionsCount, setLionsCount] = useState(0);
  const [tigersCount, setTigersCount] = useState(0);

  console.log(lionsCount);

  const addLionsTouchdown = e => {
    e.preventDefault();
    setLionsCount(lionsCount + 7);
  }

  const addLionsField = e => {
    e.preventDefault();
    setLionsCount(lionsCount + 3);
  }

  const addTigersTouchdown = e => {
    e.preventDefault();
    setTigersCount(tigersCount + 7);
  }

  const addTigersField = e => {
    e.preventDefault();
    setTigersCount(tigersCount + 3);
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score"><span>{lionsCount}</span></div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score"><span>{tigersCount}</span></div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={addLionsTouchdown}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={addLionsField}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={addTigersTouchdown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={addTigersField}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;