import SearchBar from "../search-bar/search-bar";
import "./main.scss";
import plug from "./item/book-img.jpg";
import Item from "./item/item";

const Main = (props) => {
  return (
    <main className="main">
      <div className="main__container">
        <SearchBar />
        <div className="main__content">
          <Item
            title="Wildfire and Americans"
            author="Roger G. Kennedy"
            img={plug}
          />
          <Item
            title="Wildfire and Americans"
            author="Roger G. Kennedy"
            img={plug}
          />
          <Item
            title="Wildfire and Americans"
            author="Roger G. Kennedy"
            img={plug}
          />
          <Item
            title="Wildfire and Americans"
            author="Roger G. Kennedy"
            img={plug}
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
