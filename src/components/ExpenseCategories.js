// src/components/ExpenseCategories.js
import React from 'react';
import './ExpenseCategories.css';

const ExpenseCategories = ({ expenses }) => {
  // Define rules for automatic categorization
  const categoryRules = [
    { keywords: ['grocery', 'food'], category: 'Groceries' },
    { keywords: ['transport', 'car'], category: 'Transportation' },
    { keywords: ['entertainment', 'movie', 'games'], category: 'Entertainment' },
    // Add more rules as needed
  ];

  // Helper function to categorize an expense based on keywords
  const categorizeExpense = (description) => {
    const lowercaseDescription = description.toLowerCase();
    const matchingRule = categoryRules.find((rule) =>
      rule.keywords.some((keyword) => lowercaseDescription.includes(keyword))
    );
    return matchingRule ? matchingRule.category : 'Uncategorized';
  };

  // Apply categorization to each expense
  expenses.forEach((expense) => {
    if (!expense.category) {
      expense.category = categorizeExpense(expense.description);
    }
  });

  // Extract unique expense categories
  const uniqueCategories = [...new Set(expenses.map((expense) => expense.category))].filter(Boolean);

  // Calculate total expenses for each category
  const categoryTotals = uniqueCategories.map((category) => ({
    category,
    total: expenses
      .filter((expense) => expense.category === category)
      .reduce((sum, expense) => sum + expense.amount, 0),
  }));

  return (
    <div>
      <h2>Expense Categories</h2>
      <ul>
        {categoryTotals.map((category) => (
          <li key={category.category}>
            {category.category}: ${category.total.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseCategories;
