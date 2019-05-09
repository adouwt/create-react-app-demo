import React, { Fragment } from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter, Switch } from 'react-router-dom'
// import DevTools from 'mobx-react-devtools'
import { Provider } from 'mobx-react'

import stores from 'stores'

import Home from 'routes/home'
import About from 'routes/about'
import List from 'routes/list'

import Index from '../page/index'
import Money from '../page/money'
import Koubei from '../page/koubei'
import Friend from '../page/friend'
import My from '../page/my'

const Routes = () => (
  <HashRouter>
    <div>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/list" component={List} />
        <Route path="/index" component={Index} />
        <Route path="/money" component={Money} />
        <Route path="/koubei" component={Koubei} />
        <Route path="/friend" component={Friend} />
        <Route path="/my" component={My} />
      </Switch>
    </div>
  </HashRouter>
)

const App = () => (
  <Fragment>
    <Provider {...stores}>
      <Routes />
    </Provider>
    {
      process.env.NODE_ENV === 'development' ? (
        // <DevTools />
        <div />
      ) : null
    }
  </Fragment>
)

export default App
