import './App.css';
import NewsNavBar from './Components/NewsNavBar';
import News from './Components/News';

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//Class based project
export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div>
        <Router>
          <NewsNavBar/>

          <Switch>
            <Route exact path='/'><News key="general" pageSize={9} country={"us"} category={"general"} /></Route>
            <Route exact path='/business'><News key="business" pageSize={9} country={"us"} category={"business"} /></Route>
            <Route exact path='/entertainment'><News key="entertainment" pageSize={9} country={"us"} category={"entertainment"} /></Route>
            <Route exact path='/general'><News key="general" pageSize={9} country={"us"} category={"general"} /></Route>
            <Route exact path='/health'><News key="health" pageSize={9} country={"us"} category={"health"} /></Route>
            <Route exact path='/science'><News key="science" pageSize={9} country={"us"} category={"science"} /></Route>
            <Route exact path='/sports'><News key="sports" pageSize={9} country={"us"} category={"sports"} /></Route>
            <Route exact path='/technology'><News key="technology" pageSize={9} country={"us"} category={"technology"} /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
