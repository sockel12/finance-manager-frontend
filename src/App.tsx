import React from 'react';
import './Global.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Home from './components/Home';
import Login from './components/Login';

function App() {


    return (
        <Router>
            <Routes>
                <Route path="/" Component={Home}></Route>
                <Route path="/login" Component={Login}></Route>
                <Route path="/profile" Component={Profile}></Route>
            </Routes>
        </Router>
    );
}

export default App;
