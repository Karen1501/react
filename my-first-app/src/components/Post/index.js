import React, { Component } from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody,
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
    <div>
      <CardColumns>
        <Card
          body
          inverse
          style={{ backgroundColor: "#333", borderColor: "#333" }}
        >
          <CardBody>
            <CardTitle>{props.CardTitle}</CardTitle>
            <CardSubtitle>{props.CardSubtitle}</CardSubtitle>
            <CardText>{props.CardText}</CardText>
            <Button>GO</Button>
          </CardBody>
        </Card>
      </CardColumns>
    </div>;
  }
}

function Post(props) {
  let UIElements = elements.map((title, subtitle, text, Button) => {
    return (
      <Post
        Id={ID}
        title={title}
        subtitle={subtitle}
        text={text}
        button={Button}
      ></Post>
    );
  });
}

export default Post;
