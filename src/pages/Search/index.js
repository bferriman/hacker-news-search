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
    sortBy: "relevance",
    page: 1
  });
  const [searchResults, setSearchResults] = useState([]);
  const [pageData, setPageData] = useState({
    currentPage: 0,
    numPages: 0
  });

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
    searchAPI(searchParams, 0).then( res => {
      setSearchResults(res.data.hits);
      setPageData({
        currentPage: res.data.page,
        numPages: res.data.nbPages
      });
    }).catch( err => {
      console.log(err);
    });
  };

  const handlePrevButton = event => {
    if (pageData.currentPage <= 0) {
      return;
    }
    searchAPI(searchParams, pageData.currentPage - 1).then( res => {
      setSearchResults(res.data.hits);
      setPageData({
        currentPage: res.data.page,
        numPages: res.data.nbPages
      });
    }).catch( err => {
      console.log(err);
    });
  }

  const handleNextButton = event => {
    if (pageData.currentPage >= pageData.numPages - 1) {
      return;
    }
    searchAPI(searchParams, pageData.currentPage + 1).then( res => {
      setSearchResults(res.data.hits);
      setPageData({
        currentPage: res.data.page,
        numPages: res.data.nbPages
      });
    }).catch( err => {
      console.log(err);
    });
  }


  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 mt-2">
          <h2>Search Hacker News</h2>
          <SearchForm formState={searchParams} onChange={handleInputChange} onSubmit={handleFormSubmit} />
        </div>
        <div className="col-lg-8">
          <SearchResults data={searchResults} />
          <div className={searchResults.length === 0 ? "invisible" : undefined}>
            <button 
              className={pageData.currentPage <= 0 ? "btn btn-primary m-2 disabled" : "btn btn-primary m-2"}
              onClick={handlePrevButton}
            >
              Prev
            </button>
            <button 
              className={pageData.currentPage >= pageData.numPages - 1 ? "btn btn-primary m-2 disabled" : "btn btn-primary m-2"}
              onClick={handleNextButton}
            >
              Next
            </button>
            <span>Page {pageData.currentPage + 1} of {pageData.numPages}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;