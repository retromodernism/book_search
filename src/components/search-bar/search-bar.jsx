import "./search-bar.scss";
// import { ReactComponent as search_icon } from "./search.svg";

const SearchBar = (props) => {
  return (
    <form className="search-bar">
      <label className="search-bar__input-label-search">
        <input
          type="text"
          className="search-bar__input-search"
          placeholder="Поиск"
        />
      </label>
      <label className="search-bar__input-label-submit">
        <input type="submit" className="search-bar__input-submit" value="" />
      </label>
    </form>
  );
};

export default SearchBar;
