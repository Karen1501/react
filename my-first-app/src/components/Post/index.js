import React from "react";

import "./post.css";
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
          <CardBody class="card-body">
            <CardImg
              class="card-img-top"
              src="https://picsum.photos/seed/picsum/200/300"
              alt="Card image cap"
            />
            <CardTitle class="card-title">{props.CardTitle}</CardTitle>
            <CardSubtitle class="card-subtitle">
              {props.CardSubtitle}
            </CardSubtitle>
            <CardText class="card-text">{props.CardText}</CardText>
            <Button>GO</Button>
          </CardBody>
        </Card>
      </CardColumns>
    </div>
  );
}
export default Post;
