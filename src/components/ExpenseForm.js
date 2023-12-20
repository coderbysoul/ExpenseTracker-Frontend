// src/components/ExpenseForm.js
import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onAddExpense, income, onIncomeChange }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);

  const handleAddExpense = () => {
    if (description && amount) {
      onAddExpense({
        description,
        amount: parseFloat(amount),
        category,
        isRecurring,
      });

      // Clear the form
      setDescription("");
      setAmount("");
      setCategory("");
      setIsRecurring(false);
    }
  };

  return (
    <div className="expense-form">
      <h2 className="expense-form-heading">Add New Expense</h2>
      <div>
        <label className="expense-form-label">Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="expense-form-input"
        />
      </div>
      <div>
        <label className="expense-form-label">Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="expense-form-input"
        />
      </div>
      <div>
        <label className="expense-form-label">Income:</label>
        <input
          type="number"
          value={income}
          onChange={(e) => onIncomeChange(parseFloat(e.target.value))}
          className="expense-form-input"
        />
      </div>
      <button onClick={handleAddExpense} className="expense-form-button">
        Add Expense
      </button>
    </div>
  );
};

export default ExpenseForm;
