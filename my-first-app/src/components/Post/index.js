import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardGroup,
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
];
class Post extends Component {
  render() {
    const UIElements = elements.map(({ elements }, index) => (
      <CardGroup key={index}></CardGroup>
    ));
    return (
      <Container>
        <CardGroup>
          <Card>
            <CardBody>
              <CardTitle>{UIElements.title}</CardTitle>
              <CardSubtitle>{UIElements.subtitle}</CardSubtitle>
              <CardText>{UIElements.text}</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>{UIElements.title}</CardTitle>
              <CardSubtitle>{UIElements.subtitle}</CardSubtitle>
              <CardText>{UIElements.text}</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>{UIElements.title}</CardTitle>
              <CardSubtitle>{UIElements.subtitle}</CardSubtitle>
              <CardText>{UIElements.text}</CardText>
            </CardBody>
          </Card>
        </CardGroup>
      </Container>
    );
  }
}

export default Post;
