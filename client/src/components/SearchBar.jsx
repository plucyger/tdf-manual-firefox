import React from 'react';

    const SearchBar = ({ filters, setFilters }) => {
      const handleChange = (e) => {
        setFilters({ ...filters, keyword: e.target.value });
      };

      return (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search jobs by keyword"
            value={filters.keyword}
            onChange={handleChange}
            className="input-field w-full"
          />
        </div>
      );
    };

    export default SearchBar;
