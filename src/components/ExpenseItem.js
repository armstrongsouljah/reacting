import React, {useState} from 'react';
import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './styles/ExpenseItem.css'

function ExpenseItem(props) {
    let { amount, date } = props.expense;

    // eslint-disable-next-line no-unused-vars
    const [title, setTitle] = useState(props.expense.title)

    // const clickHandler = () => {
    //     setTitle('I just got changed')
    // }
    
    
    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
            <h2> { title }</h2>
            <div className="expense-item__price">Amount: { amount }</div>
            </div>
            {/* <button onClick={clickHandler}>Change Title</button> */}
        </Card>
    )
}

export default ExpenseItem;