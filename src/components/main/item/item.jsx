import "./item.scss";
import { connect } from "react-redux";
import { openPopup as openPopupAction } from "./../../../redux/modules/popup";

const Item = ({ openPopup, book }) => {
  return (
    <div className="item" onClick={() => openPopup(book)}>
      <picture className="item__picture">
        <source media="(min-width: 0px)" srcSet={book.img.min} />
        <img className="item__img" src="#" alt={"Книга"} />
      </picture>
      <div className="item__info">
        <h1 className="item__info-h1 item__info-title">{book.title}</h1>
        <h2 className="item__info-h2 item__info-author">
          {book?.authors?.map((author, i) => i == 0 ? author : ', ' + author)}
        </h2>
      </div>
    </div>
  );
};

export default connect(null, {
  openPopup: openPopupAction,
})(Item);
