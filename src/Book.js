import React, { Component } from "react";

export const Book = ({
  title = "No title available",
  author,
  pages,
  freeBookmark,
}) => {
  return (
    <section>
      <h3>{title}</h3>
      <p>by: {author} </p>
      <p>Pages: {pages} </p>
      <p>Free Book Mark: {freeBookmark ? "Yes" : "No"}</p>
    </section>
  );
};
