import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import HomePage from "./modules/home";
import NotFoundPage from "./modules/not-found";
import "./styles/app.scss";

const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
          sticky="top"
        >
          <Navbar.Brand href="#home">tuan.daothien</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="#intro">Introuction</Nav.Link>
              <Nav.Link href="#skills">Skills Set</Nav.Link>
              <Nav.Link href="#projects">Projects and Experience</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="pw-body">
          <Switch>
            <Route path={["/home", "/"]} exact>
              <HomePage />
            </Route>
            <Route path={["/not-found", "*"]}>
              <NotFoundPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
