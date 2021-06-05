import React, { useState } from "react";
import "./ExpenseForm.css"

const ExpenseForm = (props) => {
  
  // Handling with 3 different states option
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  }
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  }
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  }
  
  const submitHandler = (event) => {
    // NOTE: normal form submit behaviour is to reload the page when submitting  the form data
    //       since we do not want that behaviour here, we handle it ourselves
    event.preventDefault();
    
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    }
    
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }
  
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={enteredTitle}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount}></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2021-01-01" max="2024-12-31" onChange={dateChangeHandler} value={enteredDate}></input>
        </div>
      </div>
      <div className="new-expense__actions"></div>
      <button type="button" onClick={props.onStopEditing}>Cancel</button>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
