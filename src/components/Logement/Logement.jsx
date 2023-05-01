import { StarRating } from "../StarRating/StarRating";
import logements from "../../data/logements.json";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Dropdown } from "../Dropdown/Dropdown";

import { Carrousel } from "../Carrousel/Carrousel";

export const Logement = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    console.log("test");
    navigate("/404");
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

      <div className="dropdownWrapperLogement">
        <Dropdown
          className="dropdownStyleLogement"
          menuName="Description"
          option={[logement.description]}
        />
        <Dropdown
          className="dropdownStyleLogement"
          menuName="Equipement"
          option={[
            <ul>
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
