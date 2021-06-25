import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="form-group">
        <label htmlFor="searchText">Search:</label>
        <input 
          type="text" 
          className="form-control" 
          id="searchText" 
          name="searchText" 
          value={props.formState.searchText} 
          onChange={props.onChange} 
        />
      </div>

      <h5>Limit Results To:</h5>
      <div className="form-check">
        <input 
          className="form-check-input" 
          type="checkbox" 
          id="type1" 
          name="includeStories" 
          value="stories" 
          checked={props.formState.includeStories} 
          onChange={props.onChange} 
        />
        <label className="form-check-label" htmlFor="type1">Stories</label>
      </div>
      <div className="form-check">
        <input 
          className="form-check-input" 
          type="checkbox" 
          id="type2" 
          name="includeComments" 
          value="comments" 
          checked={props.formState.includeComments} 
          onChange={props.onChange} 
        />
        <label className="form-check-label" htmlFor="type2">Comments</label>
      </div>
      <div className="form-check">
        <input 
          className="form-check-input" 
          type="checkbox" 
          id="type3" 
          name="includePolls" 
          value="polls" 
          checked={props.formState.includePolls} 
          onChange={props.onChange} 
        />
        <label className="form-check-label" htmlFor="type3">Polls</label>
      </div>

      <h5>Sort By:</h5>
      <div className="form-check">
        <input 
          className="form-check-input" 
          type="radio" 
          id="relevance" 
          name="sortBy" 
          value="relevance" 
          checked={props.formState.sortBy === "relevance"}
          onChange={props.onChange} 
        />
        <label className="form-check-label" htmlFor="relevance">Relevance</label>
      </div>
      <div className="form-check">
        <input 
          className="form-check-input" 
          type="radio" 
          id="date" 
          name="sortBy" 
          value="date"
          checked={props.formState.sortBy === "date"}
          onChange={props.onChange} 
        />
        <label className="form-check-label" htmlFor="date">Most Recent</label>
      </div>
      <button type="submit" className="btn btn-primary">Search</button>
    </form>
  );
}

export default SearchForm;