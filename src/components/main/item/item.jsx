import "./item.scss";

const Item = (props) => {
  return (
    <div className="item">
      <picture className="item__picture">
        <source media="(min-width: 0px)" srcSet={props.img} />
        <img className="item__img" src="#" alt={"Книга"} />
      </picture>
      <div className="item__info">
        <h1 className="item__info-h1 item__info-title">{props.title}</h1>
        <h2 className="item__info-h2 item__info-author">{props.author}</h2>
      </div>
    </div>
  );
};

export default Item;