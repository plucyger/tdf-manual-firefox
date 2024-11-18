import React from 'react';

    const JobCard = ({ job }) => {
      return (
        <div className="card">
          <h2 className="text-h3 font-semibold">{job.title}</h2>
          <p className="text-body">{job.organization.name}</p>
          <p className="text-body">{job.location}</p>
          <p className="text-body">{job.type}</p>
          <p className="text-body">{job.sector}</p>
          <p className="text-body">{job.deadline}</p>
          <p className="text-body">{job.description}</p>
        </div>
      );
    };

    export default JobCard;
