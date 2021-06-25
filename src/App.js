import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Search from "./pages/Search";
import History from "./pages/History";
import NavTabs from "./components/NavTabs";
import './App.css';
import searchesReducer from "./store/reducers/searches";

const store = createStore(searchesReducer);

const SearchPage = () => <Provider store={store}><Search /></Provider>;
const HistoryPage = () => <Provider store={store}><History /></Provider>;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavTabs />
        <Route exact path="/" component={SearchPage}></Route>
        <Route exact path="/search" component={SearchPage}></Route>
        <Route exact path="/history" component={HistoryPage}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
