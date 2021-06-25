import React, { useState } from "react";
import SearchForm from "../../components/SearchForm";
import API from "../../utilities/api";

function Search() {

  const  [searchParams, setSearchParams] = useState({
    searchText: "",
    includeStories: true,
    includeComments: false,
    includePolls: false,
    // filterByAuthor: false,
    // author: "",
    // filterByPoints: false,
    // pointsOperator: "greater",
    // numPoints: "",
    // filterByComments: false,
    // commentsOperator: "greater",
    // numComments: "",
    sortBy: "relevance"
  });
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setSearchParams({
      ...searchParams,
      [name]: value
    });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    console.log("HOT DAMN YOU DID IT");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>this is the Search page</h1>
          <SearchForm formState={searchParams} onChange={handleInputChange} onSubmit={handleFormSubmit} />
        </div>
      </div>
    </div>
  );
}

export default Search;