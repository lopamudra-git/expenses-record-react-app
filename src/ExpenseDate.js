import Card from "./Card";
import "./ExpenseDate.css";
function ExpenseDates(props)
{
const date=props.date.getDate()-1;
const month=props.date.toLocaleString('en-us',{month:"long"});
const year=props.date.getFullYear();
return(
    <Card className="button">
    <div className="date">{date}</div>
    <div>{month}</div>
    <div><i>{year}</i></div>
    </Card>
)
}
export default ExpenseDates;