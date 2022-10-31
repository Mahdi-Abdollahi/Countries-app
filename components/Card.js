import React from "react";

function Card({ name, flag, population, region, capital }) {
  return (
    <div className="card">
      <div className="card__image_container">
        <img className="card__image" src={flag} alt={name} />
      </div>
      <h5 className="card__title">{name}</h5>
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
