import { useState } from "react";
import "./App.css";
// import Card from "./components/UI/Card";
// import ExpenseItem from "./components/Expense/ExpenseItem";
// import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date("07/25/2022"),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date("02/12/2020"),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date("03/31/2021"),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date("07/01/2021"),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expenseData) => {
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
    // console.log(expenses);
  };
  return (
    <div className="container">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
