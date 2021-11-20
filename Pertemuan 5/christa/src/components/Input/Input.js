import React, { Component } from "react";
import "../../css/bootstrap.min.css";

export class Input extends Component {
  render() {
    return (
      <div className="bg-light container border border-dark">
        <input
          className="w-25 d-block ms-2 mt-2 mb-2"
          type="text"
          name="nama"
          placeholder="Enter Your Name"
          onChange={(ev) =>
            this.props.getValues(ev.target.name, ev.target.value)
          }
        />

        <input
          className="w-75 d-block ms-2 mt-2 mb-2"
          type="text"
          name="status"
          placeholder="Enter Your Status"
          onChange={(ev) =>
            this.props.getValues(ev.target.name, ev.target.value)
          }
        />
      </div>
    );
  }
}

export default Input;
