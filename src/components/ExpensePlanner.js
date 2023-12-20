// src/components/ExpensePlanner.js
import React from 'react';
import './ExpensePlanner.css';

const ExpensePlanner = ({ income }) => {
  // Define percentage allocations for various expense categories
  const expenseCategories = [
    { category: 'Housing', percentage: 30 },
    { category: 'Transportation', percentage: 15 },
    { category: 'Food', percentage: 10 },
    { category: 'Utilities', percentage: 5 },
    { category: 'Entertainment', percentage: 10 },
    { category: 'Savings', percentage: 20 },
    { category: 'Miscellaneous', percentage: 10 },
  ];

  // Calculate budget suggestions based on income
  const calculateBudget = (income, percentage) => (income * percentage) / 100;

  return (
    <div className="expense-planner">
      <h2 className="expense-planner-h2">Expense Planner</h2>
      <p className="expense-planner-p">Based on your income, here are suggested budget allocations:</p>
      <ul className="expense-planner-ul">
        {expenseCategories.map((category) => (
          <li key={category.category} className="expense-planner-li">
            {category.category}: ${calculateBudget(income, category.percentage).toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpensePlanner;
