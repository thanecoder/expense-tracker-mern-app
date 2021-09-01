import { useState } from'react';

import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter/ExpenseFilter";
import './Expenses.css';
import ExpensesList from './ExpensesList';

const Expenses = (props)=>{

    const [selectedYear, setSelectedYear] = useState('2020');

    const onYearSelectedDataHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter((expense) => {
        return (expense.date.getFullYear().toString() === selectedYear);
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selectedYear={selectedYear} onYearSelectedData={onYearSelectedDataHandler}/>
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;