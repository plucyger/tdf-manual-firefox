import React, { useState } from 'react';
    import JobCard from '../components/JobCard';
    import Filter from '../components/Filter';
    import mockData from '../mockData';

    const JobsBoard = () => {
      const [filters, setFilters] = useState({ location: '', sector: '' });

      const filteredJobs = mockData.jobs.filter((job) => {
        return (
          (filters.location ? job.location === filters.location : true) &&
          (filters.sector ? job.sector === filters.sector : true)
        );
      });

      return (
        <div className="container mx-auto p-4">
          <h1 className="text-h1 font-bold mb-4">Jobs Board</h1>
          <Filter filters={filters} setFilters={setFilters} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {filteredJobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        </div>
      );
    };

    export default JobsBoard;
