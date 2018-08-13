import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import NotFoundPage from './components/NotFoundPage';
import AddExpensePage from './components/AddExpensePage';
import HomePage from './components/HomePage';
import HelpPage from './components/HelpPage';
import Header from './components/Header'
import EditExpensePage from './components/EditExpensePage';

const Router = () => (
  <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path='/' component={HomePage} exact={true}/>
          <Route path='/create' component={AddExpensePage}/>
          <Route path='/edit/:id' component={EditExpensePage}/>
          <Route path='/help' component={HelpPage}/>
          <Route component={NotFoundPage} />
        </Switch>
      </div>
  </BrowserRouter>
);

export default Router;