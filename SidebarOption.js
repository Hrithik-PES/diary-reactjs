import React from "react";
import "./SidebarOption.css";

function SidebarOption({ active, text, Icon }) {
  var s = " ";
  if (text === "RAAHEE") {
    return (
      <div className="raahee-icon">
        <h2> {text} </h2>
        <Icon style={{ color: "deeppink" }} />
      </div>
    );
  } else {
    return (
      <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
        <Icon />
        <h3> {text} </h3>
      </div>
    );
  }
}

export default SidebarOption;
