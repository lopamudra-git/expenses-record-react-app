import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import Card from "../UI/Card";
import NewExpenses from "../NewExpenses/NewExpenses";
export default function Expenses(props)
{
return(
    <Card className="expenses">
        <NewExpenses/>
        <h2>Here is your Expenses List!!</h2>
        {props.data.map((el)=>{
           return( <div id={el.id}>
            <ExpenseItems 
            title={el.title}
            date={el.date}
            price={el.amount}/>
            </div>)
        })}
            {/* <div id={props.data[0].id}>
            <ExpenseItems 
            title={props.data[0].title}
            date={props.data[0].date}
            description={props.data[0].description}/>
            </div> */}
       
    </Card>
)
}