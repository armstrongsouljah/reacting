import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './styles/ExpenseItem.css'

function ExpenseItem(props) {
    let {title, amount, date } = props.expense;
    
    
    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
            <h2> { title }</h2>
            <div className="expense-item__price">Amount: { amount }</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;