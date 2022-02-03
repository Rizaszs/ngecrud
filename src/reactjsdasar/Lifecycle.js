import React, { Component } from "react";
import Sublifecycle from "./Sublifecycle";

export default class Lifecycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      makanan: "baso",
      isTampilSubHalaman: false,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          data: json,
        });
      });
  }

  ubahMakanan(value) {
    this.setState({
      makanan: value,
    });
  }

  render() {
    console.log("data :", this.state.data);
    return (
      <div>
        <h2>{this.state.makanan}</h2>
        {this.state.isTampilSubHalaman && (
          <Sublifecycle ubahMakanan={(value) => this.ubahMakanan(value)} />
        )}
        <button
          onClick={() =>
            this.setState({
              isTampilSubHalaman: !this.state.isTampilSubHalaman,
            })
          }
        >
          Tampilkan Halaman Sub
        </button>
      </div>
    );
  }
}
