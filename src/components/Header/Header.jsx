import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <nav className="navbar">
      <NavLink to={"/"}>
        <img src={logo} alt="logo" className="logo" />
      </NavLink>
      <ul className="listWrapper">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {" "}
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>A Propos</li>
        </NavLink>
      </ul>
    </nav>
  );
};
