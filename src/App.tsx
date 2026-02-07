import React, { useState } from 'react';

const ChronosTimeMachine: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [discipline, setDiscipline] = useState('');

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = new Date(event.target.value);
    setCurrentTime(newTime);
  };

  const handleDisciplineChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDiscipline(event.target.value);
  };

  return (
    <div>
      <h1>Chronos Digital Time Machine</h1>
      <h2>Current Time: {currentTime.toUTCString()}</h2>

      <label htmlFor="time-navigator">Select Time:</label>
      <input type="datetime-local" id="time-navigator" onChange={handleTimeChange} />

      <label htmlFor="discipline-select">Select Discipline:</label>
      <select id="discipline-select" onChange={handleDisciplineChange}>
        <option value="">--Select Discipline--</option>
        <option value="history">History</option>
        <option value="science">Science</option>
        <option value="art">Art</option>
      </select>

      <div>
        <h2>Selected Discipline: {discipline}</h2>
      </div>
    </div>
  );
};

export default ChronosTimeMachine;
