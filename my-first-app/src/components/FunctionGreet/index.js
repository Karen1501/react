import React from "react";

// Css
import { Badge } from "reactstrap";

function Greet(props) {
  return (
    <div>
      <p>
        Hola {props.firstName} {props.lastName}{" "}
        <Badge color="secondary">New</Badge>
      </p>
    </div>
  );
}

export default Greet;
