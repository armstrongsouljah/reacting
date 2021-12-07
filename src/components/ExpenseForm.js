import React, { useState } from 'react';
import './styles/ExpenseForm.css'

const ExpenseForm = (props) => {
  
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('0.00')
    const [date, setDate] = useState('2020-01-01')
    const {onExpenseSubmit} = props

    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: '',
    //     date: ''
    // })

    
    const titleChangeHandler = (e) => {
       setTitle(e.target.value)

    // setUserInput({
    //     ...userInput,
    //     title: e.target.value
    // })

    // setUserInput((prevState)=> {
    //   return {
    //       ...prevState,
    //       title: e.target.value
    //   }
    // })
    }

    const amountChangeHandler = (e) => {
        e.preventDefault()
        setAmount(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     amount: e.target.value
        // })
    }

    const dateChangeHandler = (e) => {
       setDate(e.target.value)
    //    setUserInput({
    //     ...userInput,
    //     date: e.target.value
    // })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        let data = {
            title,
            amount,
            date: new Date(date),
            id: Math.random().toString()
        }
        setDate('')
        setAmount('')
        setDate('')
        onExpenseSubmit(data)
        
    }
    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="title">Title</label>
                <input itemType="text" id="title" onChange={titleChangeHandler} value={title}/>
                </div>
        </div>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="amount">Amount</label>
                <input itemType="number" id="amount" min="0.01" step="0.01" value={amount} onChange={amountChangeHandler} />
            </div>
        </div>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" min="2021-01-01" max="2022-12-31" value={date} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
);
}

export default ExpenseForm;
