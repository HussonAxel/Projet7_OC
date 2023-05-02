import { Collapse } from "../components/Collapse/Collapse";
import { Banner } from "../components/Banner/Banner";
import banner_about from "../assets/banner_about.png";

export const About = () => {
  return (
    <>
      <Banner srcBanner={banner_about} className="aboutBanner" />
      <div className="CollapseWrapper">
        <Collapse
          className="CollapseStyleAbout"
          menuName="Fiabilité"
          option={[
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
          ]}
        />
        <Collapse
          className="CollapseStyleAbout"
          menuName="Respect"
          option={[
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
          ]}
        />
        <Collapse
          className="CollapseStyleAbout"
          menuName="Service"
          option={[
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
          ]}
        />
        <Collapse
          className="CollapseStyleAbout"
          menuName="Sécurité"
          option={[
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
          ]}
        />
      </div>
    </>
  );
};
