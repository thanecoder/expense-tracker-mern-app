import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState';

function AddTransaction() {

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  // Generate random ID
  function generateID() {
    return Math.floor(Math.random() * 100000000);
  }

  const addTransactionHandler = (event) => {
    event.preventDefault();
    addTransaction({
      id:generateID(),
      text:text,
      amount:+amount
    })
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input 
            type="text" 
            id="text" 
            placeholder="Enter text..." 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
          >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input 
            type="number" 
            id="amount" 
            placeholder="Enter amount..." 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
          />
        </div>
        <button className="btn" onClick={addTransactionHandler}>Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction