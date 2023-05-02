import React from "react";
import logements from "../../data/logements.json";
import { Link } from "react-router-dom";

export const LocationGalery = () => {
  return (
    <section className="section">
      <div className="container">
        {logements.map((logement) => (
          <Link to={`/house/${logement.id}`} key={logement.id}>
            <div
              className="item"
              style={{ backgroundImage: `url(${logement.cover})` }}
            >
              <p className="title">{logement.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
