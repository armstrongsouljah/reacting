import './styles/ExpenseItem.css'
function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>Date {new Date().toDateString()}</div>
            <div className="expense-item__description">
            <h2>Title: Apple Music</h2>
            <div className="expense-item__price">Amount: $4.99</div>
            </div>
        </div>
    )
}

export default ExpenseItem;