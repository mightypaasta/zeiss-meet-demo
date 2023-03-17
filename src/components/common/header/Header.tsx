import React from "react";
import "./header.css";
import zeiss_logo from "../../../resources/zeiss_logo_icon.png";

//let name:string = "Keshav Adithya";

const Header = () => {
  //function to return the initals
  function getInitials(name: string): string {
    const words = name.split(" ");
    const initials = words.map((word) => word.charAt(0));
    return initials.join("");
  }

  //dummy input
  let name: string = "Keshav Adithya ";
  let initials: string = getInitials(name);
  console.log("calling header");

  return (
    <div className="Register-header">
      <div className="register-header">
        <img src={zeiss_logo} alt="" className="zeiss_logo"/>
        {/* <h1>Zeiss Meet Header</h1> */}
      </div>
      <div className="Profile">
        <span id="Init">{initials}</span>
        <span id="Name">{name}</span>
      </div>
    </div>
  );
};

export default Header;
