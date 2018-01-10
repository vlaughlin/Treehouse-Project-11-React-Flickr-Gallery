import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

//App components
import SearchForm from './components/navigation/SearchForm';
import Cats from './components/navigation/Cats';
import Dogs from './components/navigation/Dogs';
import Computers from './components/navigation/Computers';
import NotFound from './components/navigation/NotFound';

 const App = () => (
<BrowserRouter>
<div className="container">
<Route exact path= "/" component={SearchForm} />
<Route exact path= "/cats" component={Cats} />
<Route exact path= "/dogs" component={Dogs} />
<Route exact path= "/computers" component={Computers} />
<Route component={NotFound} />
</div>
</BrowserRouter>
);

export default App;
