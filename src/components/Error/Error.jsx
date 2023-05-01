import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="errorMessageWrapper">
      <h1 className="errorMessageMainContent"> 404 </h1>
      <h2 className="errorMessageSubContent">
        Oups! La page que vous demandez n'existe pas
      </h2>
      <p className="errorMessageLinkContent">
        <Link to="/">Retourner sur la page d'accueil</Link>
      </p>
    </div>
  );
};
