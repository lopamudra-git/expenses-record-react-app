import Expenses from "./components/Expenses/Expenses";
import {useState} from 'react';

const dummyExpenses = [
  {
    id: 'e1',
    title: 'Book(My Experiment With Truth)',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Book(Rich Dad Poor Dad})',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() { 
  const [expenses,setExpenses]=useState(dummyExpenses);
  const addExpenses=(newRecordedExpense)=>{
    setExpenses(prevstate=>
    {
return([newRecordedExpense,...prevstate]);
    })    
  }
  console.log(expenses);
  return (
    <div>
      <Expenses data={expenses} onExpenseRecorded={addExpenses} />      
    </div>
  );
}

export default App;
