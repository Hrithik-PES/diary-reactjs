import React from "react";
import "./Entry.css";

function Entry({ date, text }) {
  return (
    <div className="entry">
      <div className="content">
        <div className="month">
          <div className="name">{date}</div>
        </div>
        {text}
      </div>
    </div>
  );
}

Entry.defaultProps = {
  month: "May",
  day: "02",
  text: "* Insert Text Here *"
};
export default Entry;
