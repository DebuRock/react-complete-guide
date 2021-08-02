import React, { useState, useEffect } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 94.12,
    date: new Date(2021, 7, 14)
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 160.23,
    date: new Date(2019, 11, 3)
  },
  {
    id: 'e3',
    title: 'Friends Party',
    amount: 90.20,
    date: new Date(2020, 3, 22)
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
