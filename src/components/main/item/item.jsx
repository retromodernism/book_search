import "./item.scss";

const Item = ({ img, title, authors }) => {
  return (
    <div className="item">
      <picture className="item__picture">
        <source media="(min-width: 0px)" srcSet={img.normal} />
        <img className="item__img" src="#" alt={"Книга"} />
      </picture>
      <div className="item__info">
        <h1 className="item__info-h1 item__info-title">{title}</h1>
        <h2 className="item__info-h2 item__info-author">{authors}</h2>
      </div>
    </div>
  );
};

export default Item;
