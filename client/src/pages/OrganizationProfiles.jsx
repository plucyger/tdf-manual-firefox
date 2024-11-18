import React from 'react';
    import OrganizationCard from '../components/OrganizationCard';
    import mockData from '../mockData';

    const OrganizationProfiles = () => {
      return (
        <div className="container mx-auto p-4">
          <h1 className="text-h1 font-bold mb-4">Organization Profiles</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockData.organizations.map((org) => (
              <OrganizationCard key={org._id} organization={org} />
            ))}
          </div>
        </div>
      );
    };

    export default OrganizationProfiles;
