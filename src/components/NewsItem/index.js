import React from "react";

function NewsItem({ item }) {
  return (
    <div className="card my-2">
      <div className="card-body">
        { item.title && <h5 className="card-title">{item.title}</h5> }
        <h6 className="card-subtitle text-muted">{`${item.author} | ${item.created_at}`}</h6>
        { item.comment_text && <p className="card-text mt-2">{item.comment_text}</p> }
        { item.story_title && <h6 className="card-title">{item.story_title}</h6> }
        { (item.url || item.story_url) && <a href={item.url ? item.url : item.story_url} target="_blank" rel="noreferrer" className="card-link">Go To Story</a> }
      </div>
    </div>
  )
}

export default NewsItem;