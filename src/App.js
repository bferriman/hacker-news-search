import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Search from "./pages/Search";
import History from "./pages/History";
import NavTabs from "./components/NavTabs";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavTabs />
        <Route exact path="/" component={Search}></Route>
        <Route exact path="/search" component={Search}></Route>
        <Route exact path="/history" component={History}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
