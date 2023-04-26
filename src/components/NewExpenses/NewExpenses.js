import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css"
const NewExpenses=()=>
{
    const expenseRecordHandler =(enteredExpenses)=>
    {
       const expenses={...enteredExpenses,
    id:Math.random().toString()}
    }
return (
<div className="newExpenses">
<ExpenseForm collectExpenseRecord={expenseRecordHandler}/>
    </div>
);
}
export default NewExpenses;