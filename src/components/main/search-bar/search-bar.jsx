import "./search-bar.scss";
import { useState } from "react";
import {
  getBooks as getBooksAction,
  getBooksWithDelay as getBooksWithDelayAction,
} from "./../../../redux/modules/books";
import { connect } from "react-redux";

const SearchBar = ({ getBooks, getBooksWithDelay }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    e.preventDefault();

    setSearchValue(e.target.value);

    const request = e.target.value;

    if (request) {
      getBooksWithDelay(request)
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue) {
      getBooks(searchValue);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSearchSubmit}>
      <label className="search-bar__input-label-search">
        <input
          type="text"
          className="search-bar__input-search"
          placeholder="Поиск"
          onChange={handleSearchChange}
        />
      </label>
      <label className="search-bar__input-label-submit">
        <input type="submit" className="search-bar__input-submit" value="" />
      </label>
    </form>
  );
};

export default connect(null, {
  getBooks: getBooksAction,
  getBooksWithDelay: getBooksWithDelayAction,
})(SearchBar);
