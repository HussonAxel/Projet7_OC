import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <nav className="navbar">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <ul className="listWrapper">
        <Link to={"/"}>
          <li>Accueil</li>
        </Link>
        <Link to={"/about"}>
          <li>A Propos</li>
        </Link>
      </ul>
    </nav>
  );
};
