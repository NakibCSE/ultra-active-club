import React from "react";
import "./Activity.css";

const Activity = ({ activity, addActivity }) => {
  const { picture, name, time, company, age } = activity;
  return (
    <div className="activity">
      <img src={picture} alt="" />
      <div className="activity-info">
        <h3>{name}</h3>
        <p>Time Required : {time} min</p>
        <p>For Age: {age}</p>
        <p>Company: {company}</p>
      </div>
      <button onClick={() => addActivity(activity)}>Add To List</button>
    </div>
  );
};

export default Activity;
