import React from "react";
import { useSelector } from "react-redux";
import SearchItem from "../../components/SearchItem";

function History() {
  const searchHistory = useSelector(state => state.searches);
  return (
    <div className="container mt-2">
      <h2>Search History</h2>
      <div className="mt-3">
        {searchHistory.map((params, index) => {
          return <SearchItem params={params} key={index} />
        })
        }
      </div>
    </div>
  );
}

export default History;