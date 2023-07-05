import "./Expenses.css";
import "./ExpenseItem";
// import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  //here we are filtering the expense from array and returning it to filteredExpense if the year of the expense matches with the filtered year
  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="contain">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      {/* Method 1: Use Variable before JSX */}
      {/* {ExpenseContent} */}
      <ExpensesList item={filteredExpenses} />
      {/* Here we are rendering it dynamically, jitna bhi size ho sab render hoga */}

      {/* Method 2 */}
      {/* {filteredExpenses.length === 0 ? (
        <p>No Expenses Found</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */}

      {/* Method 3 */}
      {/* {filteredExpenses.length === 0 && <p>No Expenses Added</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}

      {/* <ExpenseItem
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      />
      <ExpenseItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      />
      <ExpenseItem
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
      />
      <ExpenseItem
        title={props.item[3].title}
        amount={props.item[3].amount}
        date={props.item[3].date}
      />  */}
    </div>
  );
};

export default Expenses;
