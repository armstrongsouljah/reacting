import Card from "./Card";
import ExpenseForm from "./ExpenseForm";
import './styles/NewExpense.css'

const NewExpense = (props) => {
    const {onExpenseSave} = props;
    const onSaveFormHandler = (expense) => {
        // send it upwards
        onExpenseSave(expense);
    }
    return (
    <Card className="new-expense">
        <ExpenseForm onExpenseSubmit={onSaveFormHandler}/>
    </Card>
);
}

export default NewExpense;
