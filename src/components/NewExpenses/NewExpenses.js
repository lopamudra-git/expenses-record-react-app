import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css"
const NewExpenses=(props)=>
{
    const expenseRecordHandler =(enteredExpenses)=>
    {
       const expenses={...enteredExpenses,
    id:Math.random().toString()}
    props.onNewExpenseAdded(expenses);
    }
return (
<div className="newExpenses">
<ExpenseForm onCollectExpenseRecord={expenseRecordHandler}/>
    </div>
);
}
export default NewExpenses;