import { card, cardImg, cardTitle } from "./card.css";

function Card({ sprites, name, types }: Pokemon): JSX.Element {
  return (
    <li className={card}>
      <h2 className={cardTitle}>{name}</h2>
      <img
        className={cardImg}
        src={sprites.front_default}
        alt={`${name} front view`}
      />
      {types.map((type) => type.type.name).join(", ")}
    </li>
  );
}

export default Card;
