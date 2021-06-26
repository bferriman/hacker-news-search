import axios from "axios";

const searchAPI = params => {
  // configure URL for sort by relevance or date
  let queryURL = `http://hn.algolia.com/api/v1/${params.sortBy === "relevance" ? "search" : "search_by_date"}?`;

  // add query for search text 
  if (params.searchText) {
    const queryStr = params.searchText.trim().replace(/\s/g, "%20").replace("&", "%26");
    queryURL += `query=${queryStr}`;
  }
  
  // add content tags
  const includedContent = [];
  if (params.includeStories) {includedContent.push("story");}
  if (params.includeComments) {includedContent.push("comment");}
  if (params.includePolls) {includedContent.push("poll");}
  if (includedContent.length > 0 && params.searchText) {
    queryURL += "&";
  }
  if (includedContent.length === 1) {
    queryURL += `tags=${includedContent[0]}`;
  }
  if (includedContent.length > 1) {
    queryURL += `tags=(${includedContent})`;
  }
  
  return axios.get(queryURL);
};

export default searchAPI;