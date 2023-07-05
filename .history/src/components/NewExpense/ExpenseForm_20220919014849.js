import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // const [enteredTitle, setEnteredTitle] = useState(""); //nthg, pehele se ek title ka value hai,user joh enter karega vo apen ko chahiye
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
    // id: Math.random().toString,
  });
  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value); //targets the value entered in the input box
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value); //this function is for state for every variable
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
      // id: userInput.id,
    };

    // console.log(expenseData);
    // console.log(props);
    props.onSaveExpenseData(expenseData);
    // setEnteredTitle(""); //after submitting, input text ko vapis null karega using value attr in input
    // setEnteredAmount("");
    // setEnteredDate("");
    setUserInput(() => {
      return { enteredAmount: "", enteredTitle: "", enteredDate: "" };
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={userInput.enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={userInput.enteredDate}
            min="2021-01-01"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
