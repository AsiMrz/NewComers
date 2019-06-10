import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Contact from './components/Contact';
import Stories from './components/Stories';
import Landing from './components/Landing/Landing';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path='/contact' component={Contact} />
          <Route path='/aboutus' component={Landing} />
          <Route path='/stories' component={Stories} />
        </Switch>
      </div>
    </BrowserRouter>
    <div>
      <Landing/>
    </div>
    
  );
}

export default App;
