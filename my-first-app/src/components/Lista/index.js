import React, { Component } from "react";

import "./List.css";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Badge,
  Button,
} from "reactstrap";

/*
const elements = [
  {
    text: "text1",
  },
  {
    text: "text2",
  },
  {
    text: "text3",
  },
];
*/
const elements = [];
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeList: true,
    };
    this.handleShowListClick = this.handleShowListClick.bind(this);
  }

  handleShowListClick() {
    const { activeList } = this.state;
    this.setState({
      activeList: !activeList,
    });
  }

  render() {
    const { activeList } = this.state;
    let UIElements = elements.map(({ text }) => (
      <ListGroupItem>{text}</ListGroupItem>
    ));

    if (!UIElements.length) {
      UIElements = (
        <h1>
          <Badge color="danger">No hay elementos </Badge>
        </h1>
      );
    }

    return (
      <Container>
        <Row>
          <Col>
            {activeList ? (
              <ListGroup className="list-group-item">{UIElements}</ListGroup>
            ) : null}
          </Col>
          <Button onClick={this.handleShowListClick}>
            {activeList ? "Hide list" : "Show list"}
          </Button>
        </Row>
      </Container>
    );
  }
}

export default List;
