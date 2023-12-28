/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import { AuthProvider } from "./contexts/AuthContext";
import { Route, Router } from "@solidjs/router";

const root = document.getElementById("root");

render(
  () => (
    <AuthProvider>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </AuthProvider>
  ),
  root!
);
