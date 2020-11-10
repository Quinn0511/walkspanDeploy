/*App.js*/
import React, { Component, lazy, Suspense } from "react";
import "./App.css";
//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Spin } from "antd";

import MapPage from "./pages/widgets/WidgetBox/Map/customizeMap";

const HomePage = lazy(() => import("./pages/homepage/homepage"));
const UsersPage = lazy(() => import("./pages/users"));
const NotFoundPage = lazy(() => import("./pages/404"));
const APIPage = lazy(() => import("./pages/api/apipage"));
const DataPage = lazy(() => import("./pages/data/datapage"));
const WidgetsPage = lazy(() => import("./pages/widgets/widgetspage"));
const AdminPage = lazy(() => import("./pages/admin/AdminPage"));
const LoginPage = lazy(() => import("./pages/login/LoginPage"));
const SignupPage = lazy(() => import("./pages/login/SignupPage"));
const ContactPage = lazy(() => import("./pages/contact/contact"));
// const MapPage = lazy(() => import("./pages/widgets/WidgetBox/Map/customizeMap"));
class App extends Component {
  render() {
    return (
      <Router>
        <Suspense
          fallback={
            <div className="spinWrap">
              <Spin size="large" />
            </div>
          }
        >
          <Switch>
            {/*All our Routes goes here!*/}
            <Route exact path="/" component={HomePage} />
            <Route exact path="/data" component={DataPage} />
            <Route exact path="/api" component={APIPage} />
            <Route exact path="/widgets" component={WidgetsPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/users" component={UsersPage} />
            <Route exact path="/admin" component={AdminPage} />
            <Route exact path="/404" component={NotFoundPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/map" component={MapPage} />
            <Redirect to="/404" />
          </Switch>
        </Suspense>{" "}
      </Router>
    );
  }
}

export default App;
