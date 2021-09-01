import React, { useState } from 'react';

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props)=>{

    const [title, setTitle] = useState(props.name);

    const clickEventHandler = ()=>{
        setTitle('Updated');
    }

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