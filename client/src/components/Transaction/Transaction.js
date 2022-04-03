import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

function Transaction(props) {
  const txn = props.txn;
  const { currency, deleteTransaction } = useContext(GlobalContext);
  const sign = txn.amount <= 0 ? '-':'+';

  const deleteTransactionHandler = () => {
    deleteTransaction(txn._id)
  }

  return (
    <>
      <li
        key={txn.id}
        id={txn.id}
        className={txn.amount <= 0 ? "minus" : "plus"}
      >
        {txn.text}
        <span>
          {sign} {currency} {Math.abs(txn.amount)}
        </span>
        <button className="delete-btn" onClick={deleteTransactionHandler}>x</button>
      </li>
    </>
  );
}

export default Transaction;
