import React from 'react';

    const OrganizationCard = ({ organization }) => {
      return (
        <div className="card">
          <h2 className="text-h3 font-semibold">{organization.name}</h2>
          <p className="text-body">{organization.type}</p>
          <p className="text-body">{organization.location}</p>
          <div>
            {organization.jobs.map((job) => (
              <p key={job._id} className="text-body">{job.title}</p>
            ))}
          </div>
        </div>
      );
    };

    export default OrganizationCard;
