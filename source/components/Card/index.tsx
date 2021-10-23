import { card, cardImg, cardTitle } from "./card.css";
import Link from "next/link";
import { Tag } from "../Tag/tag.css";

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
          <div>
            {types.map((type) => (
              <span className={Tag} key={type.type.name}>
                {type.type.name}
              </span>
            ))}
          </div>
        </a>
      </Link>
    </li>
  );
}

export default Card;
