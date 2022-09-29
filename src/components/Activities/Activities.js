import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import ListActivity from "../ListActivity/ListActivity";
import "./Activities.css";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  const addActivity = (activity) => {
    const newActivity = [...list, activity];
    setList(newActivity);
  };
  return (
    <div className="activities-container">
      <div className="activity-container">
        {activities.map((activity) => (
          <Activity
            key={activity.id}
            activity={activity}
            addActivity={addActivity}
          ></Activity>
        ))}
      </div>
      <div className="list-container">
        <ListActivity list={list}></ListActivity>
      </div>
    </div>
  );
};

export default Activities;
