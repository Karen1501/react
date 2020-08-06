import React, { Component } from "react";
import { Badge } from "reactstrap";

class ClassGreet extends Component {
  render() {
    return (
      <div>
        <p>
          Hola {this.props.firstName} {this.props.lastName}{" "}
          <Badge color="secondary">New</Badge>
        </p>
      </div>
    );
  }
}

export default ClassGreet;
