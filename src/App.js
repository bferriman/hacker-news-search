import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Search from "./pages/Search";
import History from "./pages/History";
import NavBar from "./components/NavBar";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/" component={Search}></Route>
        <Route exact path="/search" component={Search}></Route>
        <Route exact path="/history" component={History}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
