import React, { Component } from "react";
import { Badge, Button, Container } from "reactstrap";

class Clock extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      initialDate: new Date().toLocaleTimeString(),
      date: new Date().toLocaleTimeString(),
      color: "primary",
      counter: 1,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount");
    setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString(),
      });
    }, 1000);

    setInterval(() => {
      this.setState({
        color: "danger",
      });
    }, 3000);
  }

  handleClick() {
    let { counter } = this.state;
    counter = counter + 1;
    this.setState({
      counter,
      color: "danger",
    });
    this.setState({
      counter,
      color: "primary",
    });
  }

  render() {
    console.log("render");
    return (
      <>
        <h1>
          <Badge color={this.state.color}>{this.state.date}</Badge>
        </h1>
        <h1>{this.state.initialDate}</h1>
        <Container>
          <p>
            <Badge color={this.state.color}>{this.state.counter}</Badge>
          </p>
          <Button onClick={this.handleClick}>Click me!</Button>
        </Container>
      </>
    );
  }
}

export default Clock;
