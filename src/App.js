import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';

function App() {
  return (
   /* <><BrowserRouter>
    <Navbar/>
    <Route exact path="/">
      <Home/>
    </Route>
 <Route path="/login">
      <Login/>
    </Route>
   <Route path="/signup">
      <Signup/>
    </Route>
    <Route path="/profile">
      <Profile/>
    </Route>
  </BrowserRouter>
<Profile/></>*/
<Home/>
  
  );
}

export default App;
