import "./search-bar.scss";
import { useState } from "react";
import { getBooks as getBooksAction } from "./../../redux/modules/books";
import { connect } from "react-redux";

const SearchBar = ({ getBooks }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
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
})(SearchBar);
