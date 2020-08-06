import React from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody,
} from "reactstrap";

function Post(props) {
  return (
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
    </div>
  );
}
export default Post;
