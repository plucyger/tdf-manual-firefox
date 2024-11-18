import React, { useState } from 'react';
    import ExpertCard from '../components/ExpertCard';
    import mockData from '../mockData';

    const ExpertProfiles = () => {
      const [editing, setEditing] = useState(false);
      const [expert, setExpert] = useState(mockData.experts[0]);

      const handleEdit = () => {
        setEditing(!editing);
      };

      const handleSave = (updatedExpert) => {
        setExpert(updatedExpert);
        setEditing(false);
      };

      return (
        <div className="container mx-auto p-4">
          <h1 className="text-h1 font-bold mb-4">Expert Profiles</h1>
          <ExpertCard
            expert={expert}
            editing={editing}
            onEdit={handleEdit}
            onSave={handleSave}
          />
        </div>
      );
    };

    export default ExpertProfiles;
