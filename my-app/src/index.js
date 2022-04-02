import React, { Fragment } from "react";
import ReactDOM from "react-dom";

function Title(){
  return (
    <Fragment>
      <h1>Hello World</h1>
      <span>Hello World</span>
    </Fragment>
  )
}

ReactDOM.render(
  <Title />,
  document.querySelector("#root")
)