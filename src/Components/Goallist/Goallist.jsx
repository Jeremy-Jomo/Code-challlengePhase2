
import React from 'react';
import './Goalist.css';


function GoalList({ goals }) {
  return (
    <div className="goal-list">
      <h2>Goals List</h2>
      <div className="card-container">
        {goals.map((goal) => {
          const progress = (goal.savedAmount / goal.targetAmount) * 100;

          return (
            <div key={goal.id} className="goal-card">
              <h3>{goal.name}</h3>
              <p><strong>Saved:</strong> ${goal.savedAmount} / ${goal.targetAmount}</p>
              <div className="progress-bar-wrapper">
                <div className="progress-bar">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <span className="progress-percent">{Math.floor(progress)}%</span>
              </div>
              <p><strong>Category:</strong> {goal.category}</p>
              <p><strong>Deadline:</strong> {new Date(goal.deadline).toLocaleDateString()}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default GoalList;