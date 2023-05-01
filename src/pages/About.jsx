import { Dropdown } from "../components/Dropdown/Dropdown";
import { Banner } from "../components/Banner/Banner";
import banner_about from "../assets/banner_about.png";

export const About = () => {
  return (
    <>
      <Banner srcBanner={banner_about} className="aboutBanner" />
      <div className="dropdownWrapper">
        <Dropdown
          className="dropdownStyleAbout"
          menuName="Fiabilité"
          option={[
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
          ]}
        />
        <Dropdown
          className="dropdownStyleAbout"
          menuName="Respect"
          option={[
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
          ]}
        />
        <Dropdown
          className="dropdownStyleAbout"
          menuName="Service"
          option={[
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
          ]}
        />
        <Dropdown
          className="dropdownStyleAbout"
          menuName="Sécurité"
          option={[
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
          ]}
        />
      </div>
    </>
  );
};
