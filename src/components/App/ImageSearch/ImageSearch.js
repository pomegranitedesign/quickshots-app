import React from 'react';

export default (props) => (
  <div className="imageSearch">
    <form onSubmit={props.submitTheSearchQuery} >
      <input type="text" 
            className="searchInput"
            placeholder={window.innerWidth < 600 ? '' : "Start Searching...⚡"}
            autoFocus
            value={props.userInput}
            onChange={props.searchOnChangeHandler}
      />
    </form>
  </div>
);