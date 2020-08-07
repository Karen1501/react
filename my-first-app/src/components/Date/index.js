import React, { Component } from "react";
import { Badge, Button, Container } from "reactstrap";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialDate: new Date().toLocaleTimeString(),
      date: new Date().toLocaleTimeString(),
      color: "danger",
      counter: 1,
      clicked: false,
    };
    this.handleClick = this.handleClick.bind(this); //funcion normal
    this.state.clicked = this.clicked.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString(),
        color: "warning",
      });
    }, 1000);
  }

  handleClick() {
    console.log("Me clickeron");
    let { counter } = this.state;
    counter = counter + 1;
    clicked = !clicked;
    this.setState({
      counter,
      clicked,
    });
  }

  render() {
    return (
      <>
        <h1>
          <Badge color={this.state.color}>{this.state.initialDate}</Badge>
        </h1>
        <h1>{this.state.initialDate}</h1>
        <h1>{this.state.date}</h1>
        <Container>
          <p>
            {this.state.counter}
            <Button btn bnt succes>
              Click me
            </Button>
          </p>
        </Container>
      </>
    );
  }
}

export default Clock;
