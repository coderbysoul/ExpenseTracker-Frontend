// src/components/FinancialGoals.js
import React, { useState } from 'react';
import './FinancialGoals.css';

const FinancialGoals = ({ income }) => {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState({ description: '', targetAmount: 0 });

  const handleAddGoal = () => {
    setGoals((prevGoals) => [...prevGoals, newGoal]);
    setNewGoal({ description: '', targetAmount: 0 });
  };

  return (
    <div className="financial-goals">
      <h2>Financial Goals</h2>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={newGoal.description}
          onChange={(e) => setNewGoal({ ...newGoal, description: e.target.value })}
        />
      </div>
      <div>
        <label>Target Amount:</label>
        <input
          type="number"
          value={newGoal.targetAmount}
          onChange={(e) => setNewGoal({ ...newGoal, targetAmount: parseFloat(e.target.value) })}
        />
      </div>
      <button className="financial-goals-button" onClick={handleAddGoal}>
        Add Goal
      </button>

      <div>
        <h3>Your Financial Goals</h3>
        <ul>
          {goals.map((goal) => (
            <li key={goal.description}>
              {goal.description}: ${goal.targetAmount.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FinancialGoals;
