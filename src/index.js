import React, { Component } from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Library from "./Library";

let bookList = [
  { title: "My book", author: "Me", pages: 120 },
  { title: "Our book", author: "Us", pages: 720 },
  { title: "Your book", author: "You", pages: 20 },
  { title: "His book", author: "He", pages: 190 },
  { title: "Her book", author: "She", pages: 130 },
];

render(<Library books={bookList} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
