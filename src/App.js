import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import Form from "./components/form";
import ExistentAccount from "./components/existentAccount";

const App = () => {
  return (
      <BrowserRouter>
          <Route  exact path='/'>
              <Form/>
          </Route>
          <Route exact path='/existent-account'>
              <ExistentAccount/>
          </Route>
      </BrowserRouter>
  )
}

export default App;
