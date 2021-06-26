import React from "react";
import NewsItem from "../NewsItem";
import "./style.css";


function SearchResults(props) {
  return (
    <div>
      {props.data.map( item => {
        return <NewsItem item={item} key={item.objectID} />;
      })}
    </div>
  );
}

export default SearchResults;