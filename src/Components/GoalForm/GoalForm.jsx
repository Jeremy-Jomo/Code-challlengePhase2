import React, { useState } from 'react';
import './GoalForm.css';
import { createGoal } from '../../api';

function GoalForm({ onGoalCreated }) {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    targetAmount: '',
    deadline: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newGoal = {
      ...formData,
      targetAmount: parseFloat(formData.targetAmount),
      savedAmount: 0
    };

    await createGoal(newGoal);
    setFormData({ name: '', category: '', targetAmount: '', deadline: '' });
    onGoalCreated(); // refresh goals
  };

  return (
    <div className="add-goal-form">
      <h2>Add New Goal</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Goal Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
        <input type="number" name="targetAmount" placeholder="Target Amount" value={formData.targetAmount} onChange={handleChange} required />
        <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} required />
        <button type="submit">Create Goal</button>
      </form>
    </div>
  );
}

export default GoalForm;
