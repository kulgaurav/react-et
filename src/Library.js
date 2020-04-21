import React, { Component } from "react";
import { Book } from "./Book";
import { Hiring } from "./Hiring";
import { NotHiring } from "./NotHiring";

class Library extends Component {
  static defaultProps = {
    books: [
      // Title, Author , page ==> render when app breaks
    ],
  };

  state = {
    open: true,
    freeBookmark: false,
    hiring: true,
    loading: false,
    data: [],
  };

  componentDidMount() {
    console.log("The component is mounted.");
    this.setState({ loading: true });
  }

  componentDidUpdate() {
    console.log("The component just updated.");
  }

  toggleOpenClose = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  };

  render() {
    console.log(this.state);
    const { books } = this.props;
    return (
      <div>
        {this.state.hiring ? <Hiring /> : <NotHiring />}
        {this.state.loading ? "loading..." : <div> {this.state.data} </div>}

        <h1>The Library is {this.state.open ? "open" : "closed"}</h1>
        <button onClick={this.toggleOpenClose}>Change</button>
        {books.map((book, i) => (
          <Book
            key={i}
            title={book.title}
            author={book.author}
            pages={book.pages}
            freeBookmark={this.state.freeBookmark}
          />
        ))}
      </div>
    );
  }
}

export default Library;
