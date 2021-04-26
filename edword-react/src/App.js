import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/views/Home';
import Footer from './components/Footer';
import Learn from './components/views/Learn';
import Revision from './components/views/Revision';
import SignIn from './components/views/SignIn';
import SignUp from './components/views/SignUp';
import Sets from './components/views/Sets';
import AddSet from './components/views/AddSet';
import WordForm from './components/WordForm';

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Switch>
              <Route path='/' exact  component={Home}/>
              <Route path='/learn' component={Learn}/>
              <Route path='/revision' component={Revision}/>
              <Route path='/signin' component={SignIn}/>
              <Route path='/signup' component={SignUp}/>
              <Route path='/sets' component={Sets}/>
              <Route path='/addset' component={AddSet}/>
              <Route path='/addword' component={WordForm}/>
          </Switch>
          <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
