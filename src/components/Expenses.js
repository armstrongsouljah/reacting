import { useState } from "react";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import './styles/Expenses.css'


function Expenses(props) {
    const { expenses } = props;
    const [selectedYear, setSelectedYear] = useState('')
    const handleFilterYearChange = (yearSelected) => {
        console.log('****selected***', yearSelected)
        setSelectedYear(yearSelected)
    }
   return (
       <Card className="expenses">
           <ExpenseFilter selectedYear={selectedYear} onFilterChanged={handleFilterYearChange}/>
           {
               expenses.map(expense => {
                  return <ExpenseItem key={`${expense.id}-expense`} expense={expense}/>
                })
           }
       </Card>
   )
}

export default Expenses;