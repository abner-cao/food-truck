import React from 'react';

function Search(props) {
  return (
    <div className="search-container">
      <input type="text" placeholder="please search..." onChange={e => props.onSearch(e.target.value)} />
    </div>
  )
}

export default Search;