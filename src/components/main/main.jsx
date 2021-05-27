import SearchBar from "../search-bar/search-bar";
import "./main.scss";

const Main = (props) => {
  return (
    <main className="main">
      <div className="main__container">
        <SearchBar />
        <div className="main__content"></div>
      </div>
    </main>
  );
};

export default Main;
