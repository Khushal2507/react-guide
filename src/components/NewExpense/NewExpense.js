import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setisEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setisEditing(false);
  };
  const startEditingHandler = () => {
    setisEditing(true);
  };

  const stopEditingHandler = () => {
    setisEditing(false);
  };
  // console.log(ExpenseForm);
  return (
    <div className="new-expense">
      {/* console.log(ExpenseForm); */}
      {!isEditing && ( //if isEdiiting is false, we dont need form and button render hoga
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
