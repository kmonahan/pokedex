import { card, cardImg, cardTitle } from "./card.css";
import Link from "next/link";

function Card({ id, sprites, name, types, species }: Pokemon): JSX.Element {
  return (
    <li className={card}>
      <Link href={`/${id}/${species.name}`} passHref={true}>
        <a>
          <h2 className={cardTitle}>{name}</h2>
          <img
            className={cardImg}
            src={sprites.front_default}
            alt={`${name} front view`}
          />
          {types.map((type) => type.type.name).join(", ")}
        </a>
      </Link>
    </li>
  );
}

export default Card;
