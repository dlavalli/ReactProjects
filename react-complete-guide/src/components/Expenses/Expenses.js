import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css"

function Expenses( props ) {
  return (
    <Card className="expenses">
      {
        props.expenses.map((expense, index) => {
          return <ExpenseItem key={index} title={expense.title} amount={expense.amount} date={expense.date}/>
        })
      }
    </Card>
  )
}

export default Expenses;