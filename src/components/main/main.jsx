import SearchBar from "../search-bar/search-bar";
import "./main.scss";
import plug from "./item/book-img.jpg";
import Item from "./item/item";
import { connect } from "react-redux";
import { getBooks as getBooksAction } from "./../../redux/modules/books";

const Main = ({ books, getBooks }) => {
  return (
    <main className="main">
      <div className="main__container">
        <SearchBar />
        <div className="main__content">
          {books.map((book, i) => (
            <Item key={i} {...book} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default connect(({ books }) => ({ books: books.books }), {
  getBooks: getBooksAction,
})(Main);
