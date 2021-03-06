import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import theme from "./theme";
import Welcome from "./pages/Welcome";
import Result from "./pages/Result";
import createStore from "./state/store";
import rootSaga from "./state/saga";
import GlobalStyle from "./Global.styled";

const createApp = () => {
  const { store, sagaMiddleware } = createStore();

  sagaMiddleware.run(rootSaga);

  function App() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router>
            <Switch>
              <Route path="/" exact>
                <Welcome />
              </Route>
              <Route path="/result">
                <Result />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </Provider>
    );
  }

  return App;
};

export default createApp;
