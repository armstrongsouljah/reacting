import ExpenseItem from "./ExpenseItem";
import './styles/Expenses.css'

function Expenses(props) {
    const { expenses } = props;
   return (
       <div className="expenses">
           {
               expenses.map(expense => {
                  return <ExpenseItem expense={expense}/>
                })
           }
       </div>
   )
}

export default Expenses;