import React from 'react';
import './DepositForm.css';
import { useState } from 'react';
import { updateGoal } from '../../api';



function DepositForm({ goals, onDepositMade }) {
  const [amount, setAmount] = useState('');
  const [goalId, setGoalId] = useState('');

  const handleSubmit =  (e) => {
    e.preventDefault();

    const selectedGoal = goals.find(goal => goal.id === goalId);
    if (!selectedGoal || amount <= 0) return;

    const newSavedAmount = parseFloat(selectedGoal.savedAmount) + parseFloat(amount);

    // PATCH the new savedAmount to the backend
     updateGoal(goalId, { savedAmount: newSavedAmount });

    // Reset form
    setAmount('');
    setGoalId('');

    // Callback to refresh goal list in parent
    onDepositMade();
  };

  return (
    <div className="deposit-form">
      <h2>Deposit Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="amount">Deposit Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            min="1"
          />
        </div>
        <div className="form-group">
          <label htmlFor="goal">Select Goal:</label>
          <select
            id="goal"
            name="goal"
            value={goalId}
            onChange={(e) => setGoalId(e.target.value)}
            required
          >
            <option value="">-- Select a Goal --</option>
            {goals.map((goal) => (
              <option key={goal.id} value={goal.id}>
                {goal.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Deposit</button>
      </form>
    </div>
  );
}

export default DepositForm;