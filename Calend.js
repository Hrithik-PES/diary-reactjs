import React, { useState } from "react";
import Calendar from "react-calendar";
import Entry from "./Entry";
import "react-calendar/dist/Calendar.css";
import { render } from "react-dom";

class Calend extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      text: "",
      entries: []
    };
  }

  onChange = (date) => this.setState({ date });
  //props.feedCallBack(value.toDateString());
  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }
  addNewEntry() {
    console.log("new entry");
    this.setState({
      text: "",
      entries: [
        {
          date: this.state.date.toDateString(),
          text: this.state.text
        },
        ...this.state.entries
      ]
    });
  }

  render() {
    return (
      <div>
        <Calendar onChange={this.onChange} value={this.state.date} />
        {this.state.date.toDateString()}

        <h3> Latest Entries </h3>

        <div className="entry">
          <textarea
            placeholder="Type a new entry here..."
            value={this.state.text}
            onChange={this.handleChange.bind(this)}
          />
          <button onClick={this.addNewEntry.bind(this)}> Submit </button>
        </div>

        {this.state.entries.map((entry, i) => {
          return <Entry text={entry.text} date={entry.date} key={i} />;
        })}
      </div>
    );
  }
}

export default Calend;
