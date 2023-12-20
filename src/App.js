// src/App.js
import React, { useEffect, useState } from "react";

import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpensePlanner from "./components/ExpensePlanner";
import ExpenseCategories from "./components/ExpenseCategories";
import ExpenseAnalytics from "./components/ExpenseAnalytics";
import FinancialGoals from "./components/FinancialGoals";
import "./ExpenseTracker.css";
import axios, * as others from "axios";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState(0);

  const handleAddExpense = async (newExpense) => {
    newExpense.id = new Date().getTime();
    newExpense.date = new Date();
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    try {
      const res = await axios.post("/api/expenses", newExpense);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );
  const isIncomeEnough = income >= totalExpenses;

  const fetchExpenses = async () => {
    const res = await axios.get("/api/expenses");
    console.log(res.data);
    setExpenses(res.data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div>
      <div className="container">
        <ExpenseForm
          onAddExpense={handleAddExpense}
          income={income}
          onIncomeChange={setIncome}
        />
        {isIncomeEnough ? null : (
          <div style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>
            Warning: Total expenses exceed income!
          </div>
        )}
         <ExpenseList expenses={expenses} />
       
        <ExpenseCategories expenses={expenses} />
        <ExpenseAnalytics expenses={expenses} />
        <FinancialGoals income={income} />
        
        <ExpensePlanner income={income} />
      </div>
    </div>
  );
};

export default App;
