import React, { Component } from "react";
import "../../css/bootstrap.min.css";

export class Card extends Component {
  render() {
    return (
      <div className="card bg-light container border border-dark mt-2">
        <div className="card-header ms-2 mt-2 text-primary fw-bold">
          {this.props.header}
        </div>

        <div className="card-body ms-2 mt-2">{this.props.children}</div>
      </div>
    );
  }
}

export default Card;
