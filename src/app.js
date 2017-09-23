import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import pageMap from './pages/map';
import Game from './game';
import DeadEnd from './deadEnd';
import './app.css';

const pageRoutes = pageMap.map((page)=>{return (<Route exact path={page[1]} component={page[0]}/>)})

class App extends Component {
  render() {
    return (
      <div id='app' className="app">
        <BrowserRouter>
          <Switch>
            {pageRoutes}
            <Route path='play' component={Game}/>
            <Route path='/' component={DeadEnd}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
