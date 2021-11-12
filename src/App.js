import React from 'react';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        This is the spot
      </Route>

      <Route exact path='/star'>
        Star
      </Route>

      <Route>
        404 page not found
      </Route>
    </Switch>
  );
}

export default App;
