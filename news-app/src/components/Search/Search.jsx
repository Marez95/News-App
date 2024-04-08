import "./Search.css";
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleInputChange = (event) => {
        const value = event.target.value;
        setQuery(value);
        if (value === "") {
            onSearch("");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={query} onChange={handleInputChange} placeholder='Search keywords...' />
        </form>
    );
};

export default SearchBar;