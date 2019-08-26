import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// app components
import Header from './Header';
import Home from './Home';
import About from './About';
import Courses from './Courses';
import Teachers from './Teachers';


const App = () => (
  <BrowserRouter>
    <div className="container">
       <Header />
       <Route exact path="/" component={ Home } />
       <Route path="/about" render = { ()=> <About title="About" />} />
       <Route path="/courses" component = { Courses } />
       <Route path = "/teachers" component = { Teachers } />
    </div>
  </BrowserRouter>
);

export default App;