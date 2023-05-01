import { Error } from "../pages/Error";
import { HomePage } from "../pages/Home";
import { FicheLogement } from "../pages/FicheLogement";
import { About } from "../pages/About";

import { Route, Routes, Navigate } from "react-router-dom";

function RoutesList() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/house/:id" element={<FicheLogement />} />
      <Route path="/404" element={<Error />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}

export default RoutesList;
