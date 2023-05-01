import "normalize.css";
import "./styles/main.scss";


import RoutesList from "./routes/routes";
import { useLocation } from "react-router-dom";
import  Layout  from "./components/Layout/Layout"

function App() {
  const location = useLocation();
  console.log(location)
  return (
    <div className="App">
      <Layout>
      <RoutesList />
      </Layout>
    </div>
  );
}

export default App;
