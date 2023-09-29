import ExpenseItems from "./ExpenseItems";
import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import NewExpenses from "../NewExpenses/NewExpenses";
import YearFilter from "./YearFilter";
import Chart from "../Chart/Chart";
export default function Expenses(props) {
    const [yearFilter, setYearFilter] = useState('2020');
    const [expenseForm, setExpenseForm] = useState('');
    const [validMsg, setvalidMsg] = useState('');
    // const [addExpenseFormBtn, setAddFormBtn] = useState('Add Expenses');
    let addExpenseFormBtn = 'Add New Expense';
    let msg = <h2>Keep an eye on your expenses to save better in future</h2>;

    const showExpenseForm = () => {
        setExpenseForm((prevState) => {
            if (prevState === "") {
                // setAddFormBtn("Remove");
                return <NewExpenses onNewExpenseAdded={addExpenses} />;
            }
            else {
                return "";
            }
            console.log(expenseForm);
        })
    }
    const isValid=(expenses)=>
    {
if(expenses.title==='')
{
    return false;
}
if(expenses.amount==='' || (isNaN(expenses.amount)))
return false;
if(expenses.date==='')
{
return false;
}
return true;
    }
    // let alertMsg="";
    const addExpenses = (expenses) => {
        console.log(expenses);
        if(isValid(expenses))
        {
        props.onExpenseRecorded(expenses);
        setExpenseForm('');
        setvalidMsg("Expense Added!!");
        setYearFilter(expenses.date.getFullYear());
        }
        else
        {
            setvalidMsg("Invalid input");
        }
    }
    const showFilteredExpense = (year) => {
        setYearFilter(year);
    }
    const dataToShow = props.data.filter((data) => {
        return (data.date.getFullYear() === Number(yearFilter));
    });
    if (dataToShow.length === 0) {
        msg = <h2>Hello</h2>
    }
    return (
        <Card className="expenses">
           <div id="btnAdd"> <button className="btnAddExpense" onClick={showExpenseForm}>{addExpenseFormBtn}</button></div>
           <div> {expenseForm}</div> 
            <card><p className="msg">{validMsg}</p></card>
            <YearFilter onYearSelection={showFilteredExpense} />
            <Card>
                <Chart />
                {msg}
                {dataToShow.length > 0 ?
                    (dataToShow.map((el) => {
                        // let year=el.date.getFullYear();
                        //    if(year===Number(yearFilter))
                        //    {
                        // console.log(noExpenseMsg);
                        return (<div >
                            <ExpenseItems key={el.id}
                                title={el.title}
                                date={el.date}
                                price={"Rs. " + el.amount} />
                        </div>
                        )
                    }
                        //    else
                        //    return '';
                        // }
                    )) : <div className="msg">No expenses found in {yearFilter}</div>}
                { }

            </Card>
            {/* <div id={props.data[0].id}>
            <ExpenseItems 
            title={props.data[0].title}
            date={props.data[0].date}
            description={props.data[0].description}/>
            </div> */}
        </Card>
    )
}