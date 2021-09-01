import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) =>{

    const onSaveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id:(parseInt(Math.random() * 10000000)).toString()
        }
        props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;