import React, { useState } from 'react';

import './ExpenseForm.css'

const ExpenseForm = (props) =>{

    // 1st Approach
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [formToggle, setFormToggle] = useState(false);

    // Alternative approach
    // const [userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })


    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value);
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredTitle:event.target.value}
        // })
    }

    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value);
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredAmount:event.target.value}
        // })
    }

    const dateChangeHandler = (event)=>{
        setEnteredDate(event.target.value);
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredDate:event.target.value}
        // })
    }

    const submitHandler = (event)=>{
        event.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:+enteredAmount,
            date:new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setFormToggle(prevState=>{return !prevState;});
    }

    const formToggleClickHandler = ()=>{
        setFormToggle(prevState=>{return !prevState;});
    }

    if (formToggle){
        return (
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div class="new-expense__cancel">
                    <button onClick={formToggleClickHandler} >Cancel</button>
                </div>
                <div className="new-expense__actions">
                    <button type="Submit" >Add Expense</button>
                </div>
            </form>
        ); 
    }
    else{
        return(
            <div className="new-expense__initiate">
                <button onClick={formToggleClickHandler} >Add New Expense</button>
            </div>
        );
    }


}

export default ExpenseForm;