import React from "react";

function SearchItem( {params} ) {
  return (
    <div className="card my-2">
      <div className="card-body">
        <h5 className="card-title">Search Text:</h5>
        <h5 className="card-subtitle text-muted mb-3">
          {params.searchText ? params.searchText : <i>none</i>}
        </h5>
        <h6 className="card-title">Limited To:</h6>
        {params.includeStories && <p className="card-text m-0">stories</p>}
        {params.includeComments && <p className="card-text m-0">comments</p>}
        {params.includePolls && <p className="card-text m-0">polls</p>}
        {(!params.includeStories && !params.includeComments && !params.includePolls) && <p className="card-text text-muted"><i>no restrictions</i></p>}
        <h6 className="card-title mt-2">Sorted By:</h6>
        <p className="card-text">{params.sortBy}</p>
      </div>
    </div>
  );
}

export default SearchItem;

