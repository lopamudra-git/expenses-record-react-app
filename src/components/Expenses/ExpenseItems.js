import ExpenseDates from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
export default function ExpenseItems(props)
{
    return(
        // wrapper component-Card
        <Card className="expenseItems">
        <div className="expenseItem dates"><ExpenseDates  date={props.date}/></div>
        <div className="expenseItem title">{props.title}</div>
        <div className="expenseItem price">
        <Card className="button">{props.price}</Card>
        </div>
        
        </Card>
    )
}