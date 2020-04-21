let bookList = [
  { title: "My book", author: "Me", pages: 120 },
  { title: "Our book", author: "Us", pages: 720 },
  { title: "Your book", author: "You", pages: 20 },
  { title: "His book", author: "He", pages: 190 },
  { title: "Her book", author: "She", pages: 130 },
];

const Book = ({ title, author, pages, freeBookmark }) => {
  return (
    <section>
      <h3>{title}</h3>
      <p>by: {author} </p>
      <p>Pages: {pages} </p>
      <p>Free Book Mark: {freeBookmark ? "Yes" : "No"}</p>
    </section>
  );
};

const Hiring = () => <div>We are hiring now!</div>;

const NotHiring = () => <div>No vacancy!</div>;

class Library extends Component {
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

let bookList = [
  { title: "My book", author: "Me", pages: 120 },
  { title: "Our book", author: "Us", pages: 720 },
  { title: "Your book", author: "You", pages: 20 },
  { title: "His book", author: "He", pages: 190 },
  { title: "Her book", author: "She", pages: 130 },
];

const Book = ({ title, author, pages, freeBookmark }) => {
  return (
    <section>
      <h3>{title}</h3>
      <p>by: {author} </p>
      <p>Pages: {pages} </p>
      <p>Free Book Mark: {freeBookmark ? "Yes" : "No"}</p>
    </section>
  );
};

const Hiring = () => <div>We are hiring now!</div>;

const NotHiring = () => <div>No vacancy!</div>;

class Library extends Component {
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
