import "normalize.css";
import "./styles/main.scss";

import RoutesList from "./routes/routes";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <RoutesList />
      </Layout>
    </div>
  );
}

export default App;
