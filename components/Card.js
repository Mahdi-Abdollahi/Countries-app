import styles from "../styles/Card.module.css";

import React from "react";

function Card({ name, flag, population, region, capital }) {
  return (
    <div className={styles.card}>
      <div className={styles.card__image_container}>
        <img className={styles.card__image} src={flag} alt={name} />
      </div>
      <h5 className={styles.card__title}>{name}</h5>
      <div>
        Population: <span>{population}</span>
      </div>
      <div>
        Region: <span>{region}</span>
      </div>
      <div>
        Capital: <span>{capital}</span>
      </div>
    </div>
  );
}

export default Card;
