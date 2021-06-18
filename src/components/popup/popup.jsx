import "./popup.scss";
import { connect } from "react-redux";
import { closePopup as closePopupAction } from "./../../redux/modules/popup";
import { useRef, useEffect } from "react";

const Popup = ({ popupIsActive, closePopup, book }) => {
  return popupIsActive ? (
    <div
      className="popup"
      onClick={(e) => {
        const clickInOutsude = e.target.className == "popup";
        if (clickInOutsude) {
          closePopup();
        }
      }}
    >
      <div
        className="popup__content popup-card"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <div className="popup-card__close" onClick={closePopup}>
          &times;
        </div>
        <picture className="popup-card__picture">
          <source srcSet={book?.img?.normal} media="(min-width: 768px)" />
          <source srcSet={book?.img?.min} media="(min-width: 0)" />
          <img src="#" alt="" className="popup-card__img" />
        </picture>
        <div className="popup-card__info">
          <h1 className="popup-card__info-title">
            <b>{book?.title}</b>
          </h1>
          <h3 className="popup-card__info-authors">
            <b>Authors: </b>
            {book?.authors?.map((author, i) =>
              i == 0 ? author : `, ${author}`
            )}
          </h3>
          <p className="popup-card__info-publisher">
            <b>Publisher: </b>
            {book?.publishers[0]}
          </p>
          <p className="popup-card__info-publication-date">
            <b>Publication date: </b>
            {book?.publicationDates[0]}
          </p>
          <p className="popup-card__info-isbn">
            <b>ISBN: </b>
            {book?.isbn[0]}
          </p>
        </div>
      </div>
    </div>
  ) : null;
};

export default connect(
  ({ popup }) => ({ popupIsActive: popup.popupIsActive, book: popup.book }),
  { closePopup: closePopupAction }
)(Popup);
