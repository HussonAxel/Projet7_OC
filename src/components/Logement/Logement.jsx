import { StarRating } from "../StarRating/StarRating";
import logements from "../../data/logements.json";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { Collapse } from "../Collapse/Collapse";
import { Carrousel } from "../Carrousel/Carrousel";

export const Logement = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  useEffect(() => {
    if (!logement) {
      navigate("/404");
    }
  }, [logement, navigate]);

  if (!logement) {
    return null;
  }

  const hostImage = logement.host.picture;

  return (
    <div className="wrapper">
      <Carrousel />
      {
        <div className="hostWrapper">
          <div>
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
            <ul className="listTagWrapper">
              {logement.tags.map((tag, index) => (
                <li key={index} className="listTag">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div className="HostRatingInfoWrapper">
            <div className="hostWrapperInfo">
              <p>{logement.host.name}</p>
              <img
                src={hostImage}
                alt={`${logement.host.name}`}
                className="hostImage"
              ></img>
            </div>
            <StarRating rating={logement.rating} />
          </div>
        </div>
      }

      <div className="CollapseWrapperLogement">
        <Collapse
          className="CollapseStyleLogement"
          menuName="Description"
          option={[logement.description]}
        />
        <Collapse
          className="CollapseStyleLogement"
          menuName="Equipement"
          option={[
            <ul key="equipments-list">
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>,
          ]}
        />
      </div>
    </div>
  );
};
