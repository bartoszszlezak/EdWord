import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/views/Home';
import Footer from './components/Footer';
import Learn from './components/views/Learn';

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Switch>
              <Route path='/' exact  component={Home}/>
              <Route path='/learn' component={Learn}/>
          </Switch>
          <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
