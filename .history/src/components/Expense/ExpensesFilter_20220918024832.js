import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value); //we want this value in the expenses component and udher fir items chanage karna hai using state
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/* Here value add kiya bcoz pehele 2022 default value bata rha tha, abhi we are setting it ourselves wht we want by passing from expenses component using props and using it here */}
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
