import React, { useState } from 'react';

import './Expenses.css'
import Cards from '../UI/Cards';
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesChart from './ExpensesChart';
import ExpenseList from './ExpenseList';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <li>
            <Cards className="expenses">
                <ExpenseFilter year={props.filteredYear} onYearChange={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpenseList items={filteredExpenses} />
            </Cards>
        </li>
        
    );    
}
        
        
export default Expenses;