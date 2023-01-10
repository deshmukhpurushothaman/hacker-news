import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route } from "react-router-dom";
import { HomePage } from './pages/Home';

function App() {
  return (

    <Route path="/">
      <HomePage />
    </Route>

  );
}

export default App;
