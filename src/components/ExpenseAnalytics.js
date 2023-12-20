// src/components/ExpenseAnalytics.js
import React from 'react';
import './ExpenseAnalytics.css';

const ExpenseAnalytics = ({ expenses }) => {
  const currentMonth = new Date().getMonth() + 1;
  const currentMonthExpenses = expenses.filter(
    (expense) => new Date(expense.date).getMonth() + 1 === currentMonth
  );
  const totalCurrentMonthExpenses = currentMonthExpenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const previousMonth = currentMonth === 1 ? 12 : currentMonth - 1;
  const previousMonthExpenses = expenses.filter(
    (expense) => new Date(expense.date).getMonth() + 1 === previousMonth
  );
  const totalPreviousMonthExpenses = previousMonthExpenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <div className="expense-analytics">
      <h2>Expense Analytics</h2>
      <p>Total expenses this month: ${totalCurrentMonthExpenses.toFixed(2)}</p>
      <p>Total expenses last month: ${totalPreviousMonthExpenses.toFixed(2)}</p>
      {totalPreviousMonthExpenses !== 0 && (
        <p className={totalPreviousMonthExpenses > totalCurrentMonthExpenses ? 'savings' : 'loss'}>
          Savings potential: ${(totalPreviousMonthExpenses - totalCurrentMonthExpenses).toFixed(2)}
        </p>
      )}
    </div>
  );
};

export default ExpenseAnalytics;
