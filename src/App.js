import React from 'react';

// CSS styles sheets imported

import './App.css';

//React-router declare routes from anywhere in the component tree.

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

//App components imported
import Nav from './components/navigation/Nav';
import SearchForm from './components/navigation/SearchForm';
import Cats from './components/navigation/Cats';
import Dogs from './components/navigation/Dogs';
import Computers from './components/navigation/Computers';
import NotFound from './components/Photos/NotFound'

//BrowserRouter is a root routing component that keeps the UI in sync with URL
//Route will render component in app when the URL matches its path
//Switch renders the first child <Route> that matches the location. It renders a route exclusively.

const App = () => (
    <BrowserRouter>
     <div>
     <Nav />
      <div className="container">
        <Switch>
          <Route exact path="/" component={ () => (<SearchForm />)} />
          <Route exact path="/cats" component={ () => (<Cats query={"cats"} />) } />
          <Route exact path="/dogs" component={ () => (<Dogs query={"dogs"} />)} />
          <Route exact path="/computers" component={ () => (<Computers query={"computers"} />)} />
          <Route component={NotFound} />
        </Switch>
      </div>
      </div>

    </BrowserRouter>
);

export default App;
