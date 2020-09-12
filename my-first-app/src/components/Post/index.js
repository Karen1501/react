import React, { Component } from "react";
import "./post.css";

import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody,
  Container,
} from "reactstrap";

const elements = [
  {
    title: "Title",
    subtitle: "Subtitle",
    text: "Text",
  },
  {
    title: "Title2",
    subtitle: "Subtitle2",
    text: "Text2",
  },
  {
    title: "Title3",
    subtitle: "Subtitle3",
    text: "Text3",
  },
];

class Post extends Component {
  render() {
    const UIElements = elements.map(({ title, subtitle, text }, index) => (
      <Card key={index} className="card-wrapp">
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CardText>{text}</CardText>
      </Card>
    ));
    return (
      <Container>
        <Card className="Card-post">{UIElements}</Card>
      </Container>
    );
  }
}

export default Post;
