import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

//App components
import Cats from './Cats';
import Dogs from './Dogs';
import Computers from './Computers';

 const App = () => (
<BrowserRouter>
<div className="container">
<Route exact path= "/cats" component={Cats} />
<Route exact path= "/dogs" component={Dogs} />
<Route exact path= "/computers" component={Computers} />
</div>
</BrowserRouter>
);

export default App;
