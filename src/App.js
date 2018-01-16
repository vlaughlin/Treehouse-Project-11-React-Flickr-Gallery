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

const App = () => (
<BrowserRouter>
<div>
<Nav />
<div className="container">
<Switch>
<Route path="/cats" render={ () => <Cats />} />
<Route path="/dogs" render={ () => <Dogs />} />
<Route path="/computers" render={ () => <Computers />} />

</Switch>
 </div>
</div>
</BrowserRouter>
);

export default App;
