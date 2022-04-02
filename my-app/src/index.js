import React, { Fragment } from "react";
import ReactDOM from "react-dom";

function Title({text}){
  return (
    <Fragment>
      <h1 id="title">Hello World</h1>
      <span className="text">Meu nome é {text}</span>
      <form htmlFor="" tabIndex="1" data-js="prop" aria-label="qualquer coisa"></form>
    </Fragment>
  )
}

ReactDOM.render(
  <Title text="Darlley Brito" />,
  document.querySelector("#root")
)