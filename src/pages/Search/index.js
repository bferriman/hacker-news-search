import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import searchAPI from "../../utilities/api";
import { addNewSearch } from "../../store/actions/searches";

function Search() {

  const  [searchParams, setSearchParams] = useState({
    searchText: "",
    includeStories: true,
    includeComments: false,
    includePolls: false,
    sortBy: "relevance"
  });
  const [searchResults, setSearchResults] = useState([]);

  const dispatch = useDispatch();

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
    dispatch(addNewSearch(searchParams));
    searchAPI(searchParams).then( res => {
      console.log(res);
      setSearchResults(res.data.hits);
    }).catch( err => {
      console.log(err);
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 mt-2">
          <h2>Search Hacker News</h2>
          <SearchForm formState={searchParams} onChange={handleInputChange} onSubmit={handleFormSubmit} />
        </div>
        <div className="col-lg-8">
          <SearchResults data={searchResults} />
        </div>
      </div>
    </div>
  );
}

export default Search;