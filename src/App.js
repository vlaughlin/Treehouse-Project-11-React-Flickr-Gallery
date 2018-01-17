import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

//App components
import Nav from './components/navigation/Nav';
import SearchForm from './components/navigation/SearchForm';
import Cats from './components/navigation/Cats';
import Dogs from './components/navigation/Dogs';
import Computers from './components/navigation/Computers';
import NotFound from './components/Photos/NotFound'

const App = () => (
    <BrowserRouter>
     <div>
     <Nav />
      <div className="container">
        <Switch>
          <Route exact path="/" render={ () => (<SearchForm />)} />
          <Route exact path="/cats" render={ () => (<Cats query={"cats"} />) } />
          <Route exact path="/dogs" render={ () => (<Dogs query={"dogs"} />)} />
          <Route exact path="/computers" render={ () => (<Computers query={"computers"} />)} />
          <Route component={NotFound} />
        </Switch>
      </div>
      </div>

    </BrowserRouter>
);

export default App;
