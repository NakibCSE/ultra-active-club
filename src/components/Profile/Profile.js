import React from "react";
import profile from "../../asset/Nakib.jpg";
import "./Profile.css";
const Profile = () => {
  return (
    <div className="profile">
      <img src={profile} alt="" />
      <div className="profile-info">
        <p>I'm a learner</p>
        <p>Contact: 016203393</p>
        <p>Email : thohidCse7890@gmail.com</p>
        <p>Department of CSE</p>
      </div>
    </div>
  );
};

export default Profile;
