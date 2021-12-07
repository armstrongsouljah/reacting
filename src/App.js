import Expenses from "./components/Expenses";
import expenses from "./expenses";
import './App.css'
import NewExpense from "./components/NewExpense";
import { useState } from "react";

function App() {
  const [myExpenses, setExpenses] = useState(expenses)
  const saveExpenseToStore =(expense) =>{
    setExpenses((prevState) => {
       return [...prevState, expense]
    })
  }
  return (
    <div>
     <h1 className="page-header">Expense Tracker</h1>
     <NewExpense onExpenseSave={saveExpenseToStore}/>
     <Expenses expenses={myExpenses}/>
     
    </div>
  );
}

export default App;
