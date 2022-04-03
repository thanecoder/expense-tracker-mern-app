import React from 'react';

import Card from "../../UI/Card/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props)=>{

    const title = props.name;

    return (
        <li>
            <Card className="expense-item">
                <div>
                    <ExpenseDate date={props.date} />
                </div>
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${ props.amount }</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;