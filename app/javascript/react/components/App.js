import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import PollsContainer from "./Polls/PollsContainer"
import NewPollForm from "./Polls/NewPollForm"
import PollShowPage from "./Polls/PollShowPage"

export const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/polls" component={PollsContainer} />
        <Route exact path="/polls/new" component={NewPollForm} />
        <Route exact path="/polls/:id" component={PollShowPage} />
        <Route exact path="/" component={PollsContainer} />
      </Switch>
    </Router>
  )
}

export default App
