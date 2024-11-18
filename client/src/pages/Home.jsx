import React from 'react';
    import JobCard from '../components/JobCard';
    import OrganizationCard from '../components/OrganizationCard';
    import mockData from '../mockData';

    const Home = () => {
      return (
        <div className="container mx-auto p-4">
          <h1 className="text-h1 font-bold mb-4">Featured Jobs</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockData.jobs.slice(0, 6).map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
          <h1 className="text-h1 font-bold mt-8 mb-4">Featured Organizations</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockData.organizations.slice(0, 6).map((org) => (
              <OrganizationCard key={org._id} organization={org} />
            ))}
          </div>
        </div>
      );
    };

    export default Home;
