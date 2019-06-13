import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Contact from './components/Contact';
import Stories from './components/Stories/Stories';
import Landing from './components/Landing/Landing';
import AboutUs from './components/Landing/AboutUs';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path='/contact' component={Contact} />
            <Route path='/aboutus' component={AboutUs} />
            <Route path='/stories' component={Stories} />
          </Switch>
        </div>
      </BrowserRouter>
      <div>
        <Landing />
      </div>
    </div>
  );
}

export default App;
