import React from "react";
import Calend from "./Calend";
import "./Feed.css";

export default class Feed extends React.Component {
  render() {
    return (
      <div className="feed">
        {/* Header */}
        <div className="feed__header">
          <h3> Record Your Thoughts </h3>
        </div>
        {/* Calendar */}

        <Calend />
        {/* Events or Entries of a particular day */}
        {/* Events or Entries of a particular day */}
        {/* Events or Entries of a particular day */}
      </div>
    );
  }
}
