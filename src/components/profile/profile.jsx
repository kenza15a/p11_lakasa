import React from "react";
import "./profile.css";
const Profile = (props) => {
  return (
    <>
      <div className="Profile-component">
        <p className="name">{props.name} </p>
        <img
          className="profile-pic"
          src={props.picture} // src="https://www.w3schools.com/howto/img_avatar.png"
          alt="profile pic"
        ></img>
      </div>
    </>
  );
};

export default Profile;
