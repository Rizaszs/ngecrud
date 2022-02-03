import React, { Component } from "react";

export default class Sublifecycle extends Component {
  componentWillUnmount() {
    this.props.ubahMakanan("ayam geprek");
  }

  render() {
    return (
      <div>
        <h2>Component Sub Lifecycle</h2>
      </div>
    );
  }
}
