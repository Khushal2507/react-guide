import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  //function name can be anything, convention says ki file name ki tarah rakhne ka

  //We can use this variables inside return using {}
  // const expenseDate = new Date(2022, 7, 25); //year, month, day   // Regular JS code
  // const expenseTitle = "Gaming Expense";
  // const expenseAmount = 257.64;

  const [title, setTitle] = useState(props.title);

  // const date = expenseDate.to
  // let title = props.title;
  //here, we are using props and it contains all data passed when we called this component, we can acces this using props.attr_name
  const clickHandler = () => {
    // title = "Updated";
    setTitle("Updated");
    console.log(title);
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <p className="expense-item__price">${props.amount}</p>
        </div>
        <button onClick={clickHandler}>Change title</button>
        {/* not braces bcoz function ko point karwana hai, agar braces daalege toh vo run hoga jab button ka code run hoga and  */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
