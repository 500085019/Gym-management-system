import React, { useState } from 'react';
import './ClassSchedulingForm.css';

const ClassSchedulingForm = () => {
  const [className, setClassName] = useState('');
  const [instructor, setInstructor] = useState('');
  const [schedule, setSchedule] = useState('');
  const [capacity, setCapacity] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newClass = { name: className, instructor, schedule, capacity };
    // API call to backend to save new class
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <h2>Class Scheduling</h2>
      <input
        type='text'
        placeholder='Class Name'
        value={className}
        onChange={(e) => setClassName(e.target.value)}
        required
      />
      <input
        type='text'
        placeholder='Instructor'
        value={instructor}
        onChange={(e) => setInstructor(e.target.value)}
        required
      />
      <input
        type='text'
        placeholder='Schedule'
        value={schedule}
        onChange={(e) => setSchedule(e.target.value)}
        required
      />
      <input
        type='number'
        placeholder='Capacity'
        value={capacity}
        onChange={(e) => setCapacity(parseInt(e.target.value))}
        required
      />
      <button type='submit'>Add Class</button>
    </form>
  );
};

export default ClassSchedulingForm;

