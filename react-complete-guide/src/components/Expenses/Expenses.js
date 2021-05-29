import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css"

function Expenses( props ) {
  const [filteredYear, setFilteredYear] = useState('2022');
  return (
    <div>
        <Card className="expenses">
            <ExpensesFilter  selectedYear={filteredYear}
                             setFilteredYear={setFilteredYear}/>
            {
                props.expenses.map((expense, index) => {
                  return <ExpenseItem key={index}
                                      title={expense.title}
                                      amount={expense.amount}
                                      date={expense.date}/>
                })
            }
        </Card>
    </div>
  )
}

export default Expenses;
