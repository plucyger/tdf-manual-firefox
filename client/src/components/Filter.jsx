import React from 'react';

    const Filter = ({ filters, setFilters }) => {
      const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
      };

      return (
        <div className="flex flex-wrap gap-4">
          <select
            name="location"
            value={filters.location}
            onChange={handleChange}
            className="input-field"
          >
            <option value="">All Locations</option>
            <option value="New York">New York</option>
            <option value="San Francisco">San Francisco</option>
            <option value="London">London</option>
          </select>
          <select
            name="sector"
            value={filters.sector}
            onChange={handleChange}
            className="input-field"
          >
            <option value="">All Sectors</option>
            <option value="Technology">Technology</option>
            <option value="Finance">Finance</option>
            <option value="Healthcare">Healthcare</option>
          </select>
        </div>
      );
    };

    export default Filter;
