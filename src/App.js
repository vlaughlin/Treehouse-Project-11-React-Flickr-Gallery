import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

//App components
import Cats from './components/navigation/Cats';
import Dogs from './components/navigation/Dogs';
import Computers from './components/navigation/Computers';


 const App = () => (
<BrowserRouter>
<div className="container">
<Switch>
<Route exact path= "/cats" component={Cats} />
<Route exact path= "/dogs" component={Dogs} />
<Route exact path= "/computers" component={Computers} />

</Switch>
</div>
</BrowserRouter>
);

export default App;
