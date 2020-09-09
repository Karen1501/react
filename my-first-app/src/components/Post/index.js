import React from "react";
import Reactstrap from "reactstrap";
import "../Date/date.css";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody,
  CardImg,
} from "reactstrap";

function Post(props) {
  return (
    <div>
      <CardColumns>
        <Card>
          <CardBody class="card">
            <CardImg
              class="card-img-top"
              src="https://picsum.photos/seed/picsum/200/300"
              alt="Card image cap"
            />
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
