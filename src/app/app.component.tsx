import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/app.scss";
import NotFoundPage from "./modules/not-found";

const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        <Route path={["/not-found", "*"]}>
          <NotFoundPage />
        </Route>
      </Router>
    </div>
  );
};

export default App;
