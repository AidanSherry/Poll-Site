import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import NewPollForm from "./Polls/NewPollForm"

export const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/polls/new" component={NewPollForm} />
      </Switch>
    </Router>
  )
}

export default App
