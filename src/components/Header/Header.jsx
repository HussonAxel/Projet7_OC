import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <nav className="navbar">
      <NavLink to={"/"}>
        <img src={logo} alt="logo" className="logo" />
      </NavLink>
      <ul className="listWrapper">
        <NavLink exact to={"/"} activeClassName="active">
          <li>Accueil</li>
        </NavLink>
        <NavLink exact to={"/about"} activeClassName="active">
          <li>A Propos</li>
        </NavLink>
      </ul>
    </nav>
  );
};
