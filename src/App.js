import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Main/>
      </div>
    </BrowserRouter>
  );
}

export default App;
