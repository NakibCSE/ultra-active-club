import React, { useEffect, useState } from "react";
import {toast} from "react-toastify"
import Profile from "../Profile/Profile";
import "./List.css";

const ListActivity = ({ list }) => {
  const notify = () => toast("Activity Complete Successfully!");
  const [breakTime, setBreakTime] = useState("");
  let activityTime = 0;
  for (const activity of list) {
    activityTime = activity.time + activityTime;
  }
  useEffect(() => {
    const addTime = localStorage.getItem("break-time");
    if (addTime) {
      setBreakTime(JSON.parse(addTime));
    } else {
      setBreakTime("0");
    }
  }, [breakTime]);

  const addBreak = (e) => {
    localStorage.setItem("break-time", JSON.stringify(e.target.innerText));
    setBreakTime(e.target.innerText);
  };
  return (
    <div className="list-container text-center">
      <Profile></Profile>
      <div className="break-section">
        <h4 className="text-center">Add a Break</h4>
        <button onClick={addBreak}>10s</button>
        <button onClick={addBreak}>15s</button>
        <button onClick={addBreak}>20s</button>
        <button onClick={addBreak}>25s</button>
        <button onClick={addBreak}>30s</button>
      </div>
      <div className="list-info text-center">
        <h4 className="text-center">Activity Details</h4>
        <h6 className="">
          Activity Time: <small>{activityTime}</small> min
        </h6>
        <h6>
          Break Time: <small>{breakTime}</small>{" "}
        </h6>
      </div>
      <button onClick={notify} className="btn complete-btn mt-4 px-4">
        Activity Completed
      </button>
    </div>
  );
};

export default ListActivity;
