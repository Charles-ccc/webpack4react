import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/home'
import Order from './pages/order'
import Manager from './pages/manager'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './index.scss';

class Index extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/order" component={Order} />
          <Route path="/manager" component={Manager} />
        </Switch>
      </HashRouter>
    )
  }
}

ReactDOM.render(<Index/>, document.getElementById('root'));