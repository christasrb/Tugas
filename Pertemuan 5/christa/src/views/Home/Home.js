import React from "react";
import Header from "../../components/Header/Header.js";
import Card from "../../components/Card/Card.js";
import Input from "../../components/Input/Input.js";
import "../../css/bootstrap.min.css";

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      nama: "",
      status: "",
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Input getValues={(name, value) => this.setState({ [name]: value })} />
        <Card header={this.state.nama}>
          <p>{this.state.status}</p>
        </Card>
      </div>
    );
  }
}
