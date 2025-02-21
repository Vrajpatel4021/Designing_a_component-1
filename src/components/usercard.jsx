import React from "react";
import "./Usercard.css"; // Import the external CSS file

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fwww.gravatar.com%2Favatar%2F2c7d99fe281ecd3bcd65ab915bac6dd5%3Fs%3D250";
  const name = "John Doe";
  const email = "johndoe@example.com";
  const phone = "+1 (123) 456-7890";
  const address = "123 Main St, Springfield, USA";

  return (
    <div className="user-card">
      <img src={profilePhoto} alt="Profile" className="profile-photo" />
      <h2 className="name">{name}</h2>
      <p className="email">{email}</p>
      <p className="phone">{phone}</p>
      <p className="address">{address}</p>
    </div>
  );
};

export default Usercard;
