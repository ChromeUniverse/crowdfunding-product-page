import React from "react";

function Stats({ backed, goal, backers }) {
  
  const style = {
    width: `${Math.min((backed/goal) * 100, 100)}%`
    // width: `${(backed/goal) * 100}%`
  }

  return (
    <section className="stats">
      <div className="stats-items">
        <div className="stats-item">
          <h2 className="stats-item-title">${backed.toLocaleString()}</h2>
          <p className="stats-item-subtitle">of ${goal.toLocaleString()} backed</p>
        </div>
        <div className="vl"></div>
        <div className="hl"></div>
        <div className="stats-item">
          <h2 className="stats-item-title">{backers.toLocaleString()}</h2>
          <p className="stats-item-subtitle">total backers</p>
        </div>
        <div className="vl"></div>
        <div className="hl"></div>
        <div className="stats-item">
          <h2 className="stats-item-title">56</h2>
          <p className="stats-item-subtitle">days left</p>
        </div>
      </div>
      <div className="stats-bar-container">
        <div className="stats-bar"></div>
        <div style={style} className="stats-bar-highlight"></div>
      </div>
    </section>
  );
}

export default Stats;
