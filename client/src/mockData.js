const mockData = {
      jobs: [
        {
          _id: '1',
          title: 'Software Engineer',
          organization: { _id: 'org1', name: 'Tech Corp' },
          location: 'New York',
          type: 'Full-time',
          deadline: '2023-12-31',
          description: 'Join our team as a Software Engineer.',
          sector: 'Technology',
        },
        {
          _id: '2',
          title: 'Data Analyst',
          organization: { _id: 'org2', name: 'Data Inc' },
          location: 'San Francisco',
          type: 'Full-time',
          deadline: '2023-11-30',
          description: 'We are looking for a Data Analyst.',
          sector: 'Finance',
        },
      ],
      organizations: [
        {
          _id: 'org1',
          name: 'Tech Corp',
          type: 'Private',
          location: 'New York',
          jobs: [
            { _id: '1', title: 'Software Engineer' },
            { _id: '3', title: 'Product Manager' },
          ],
        },
        {
          _id: 'org2',
          name: 'Data Inc',
          type: 'Private',
          location: 'San Francisco',
          jobs: [
            { _id: '2', title: 'Data Analyst' },
            { _id: '4', title: 'Marketing Specialist' },
          ],
        },
      ],
      experts: [
        {
          _id: 'exp1',
          name: 'John Doe',
          email: 'john.doe@example.com',
          experience: '10 years in software development',
          sectors: ['Technology', 'Finance'],
        },
      ],
    };

    export default mockData;
