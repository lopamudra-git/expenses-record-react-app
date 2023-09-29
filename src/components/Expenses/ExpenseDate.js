import Card from "../UI/Card";
import "./ExpenseDate.css";
function ExpenseDates(props)
{   
const date=props.date.getDate();
const monthInString=props.date.toLocaleString('en-us',{month:"long"});
const year=props.date.getFullYear();
return(
    <Card className="button">
    <div className="date">{date}</div>
    <div>{monthInString}</div>
    <div><i>{year}</i></div>
    </Card>
)
}
export default ExpenseDates;