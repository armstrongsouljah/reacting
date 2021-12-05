import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import './styles/Expenses.css'

function Expenses(props) {
    const { expenses } = props;
   return (
       <Card className="expenses">
           {
               expenses.map(expense => {
                  return <ExpenseItem expense={expense}/>
                })
           }
       </Card>
   )
}

export default Expenses;