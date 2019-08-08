import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => {
  console.log('Search-box trickle');

  return (<div className='search'>
    <input
      type="search"
      placeholder={ placeholder }
      onChange={ e => handleChange(e.target.value) }
    />
  </div>);
};
