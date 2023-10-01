import React from 'react';

const SearchBar = ({ onSearch }) => {
    return (
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search..." />
        </div>
    );
}



export default SearchBar;
