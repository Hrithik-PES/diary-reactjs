import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SidebarOption from "./SidebarOption";
import LocalActivityIcon from "@material-ui/icons/LocalActivity";
import HistoryIcon from "@material-ui/icons/History";
import HelpIcon from "@material-ui/icons/Help";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import "./Sidebar.css";
// Side Bar Component
function Sidebar() {
  return (
    <div className="sidebar">
      {/* Icons */}
      <SidebarOption Icon={FavoriteIcon} text="RAAHEE" />
      <SidebarOption Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={LocalActivityIcon} text="Activities" />
      <SidebarOption Icon={HistoryIcon} text="History" />
      <SidebarOption Icon={HelpIcon} text="Help" />
      <SidebarOption Icon={PermContactCalendarIcon} text="Contact Us" />

      {/* Sidebar options */}
    </div>
  );
}

export default Sidebar;
