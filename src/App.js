import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';
import Home from './Router/home';
import Contact from './Router/contact';
import Navbar from './Router/Navbar'
import Error from './Router/Error';
import Post from './Router/Post';
//  import UseState from './ModernReact/Hooks/useState';
// import UseEffect from './ModernReact/Hooks/useEffect';
// import Useref from './ModernReact/Hooks/useRef';
// import UseReducer from './ModernReact/Hooks/useReducer';
function App() {
  return (
    <>
    
    <Router>
    <Navbar/>
    <Switch>
        <Route exact path = "/" component ={Home}/>
        <Route exact path = '/contact' component ={Contact}/>
        <Route exact path = '/post/:cat/:topic' component ={Post}/>


        <Route  component ={Error}/>
    </Switch>
    </Router>
    </>
  );
}

export default App;



