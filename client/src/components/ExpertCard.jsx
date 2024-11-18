import React, { useState } from 'react';

    const ExpertCard = ({ expert, editing, onEdit, onSave }) => {
      const [name, setName] = useState(expert.name);
      const [email, setEmail] = useState(expert.email);
      const [experience, setExperience] = useState(expert.experience);
      const [sectors, setSectors] = useState(expert.sectors);

      const handleSave = () => {
        onSave({ ...expert, name, email, experience, sectors });
      };

      return (
        <div className="card">
          {editing ? (
            <>
              <input
                className="input-field"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="input-field"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
              <input
                className="input-field"
                value={sectors}
                onChange={(e) => setSectors(e.target.value.split(','))}
              />
              <button className="btn-primary" onClick={handleSave}>Save</button>
            </>
          ) : (
            <>
              <h2 className="text-h3 font-semibold">{expert.name}</h2>
              <p className="text-body">{expert.email}</p>
              <p className="text-body">{expert.experience}</p>
              <p className="text-body">{expert.sectors.join(', ')}</p>
              <button className="btn-primary" onClick={onEdit}>Edit</button>
            </>
          )}
        </div>
      );
    };

    export default ExpertCard;
