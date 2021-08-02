import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

function NewExpense(props) {
    const [openExpenseForm, setOpenExpenseForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
        setOpenExpenseForm(false)
    };

    const cancelHandler = () => {
        setOpenExpenseForm(false)
    }

    const clickHandler = (event) => {
        setOpenExpenseForm(!openExpenseForm)
    };

    return (
        <div className="new-expense">
            <button type="button" onClick={clickHandler}>Add New Expense</button>
            {openExpenseForm && <ExpenseForm onCancelClick={cancelHandler} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    );
}

export default NewExpense;