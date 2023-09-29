import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
    let currDate=new Date();
    currDate=formatDate(currDate);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [date, setdate] = useState(currDate);

    function formatDate(date) {
           let month = '' + (date.getMonth() + 1),
            day = '' + (date.getDate()),
            year = date.getFullYear();
    
            month =  month.length < 2? ( '0' + month):month;
           
            day = day.length < 2? ('0' + day):day;
    
        return [year, month, day].join('-');
    }

    const titleHandler = (event) => {
        setTitle(event.target.value);
        // console.log("title");
    };
    const priceHandler = (event) => {
        setPrice(event.target.value);
        // console.log("price");
    };
    const dateHandler = (event) => {
        setdate(event.target.value);
        console.log("from date handler"+event.target.value);
        console.log(date);
    };
    const formHandler = (event) => {
        event.preventDefault();
        const setData = {
            title: title,
            amount: price,
            date: new Date(date)    
        };
        console.log(date);
        props.onCollectExpenseRecord(setData);
        setTitle('');
        setPrice('');
        setdate(currDate);
    };
    return (
        <form onSubmit={formHandler}>
            <fieldset>
                <legend>Record your new expense</legend>
                <div className="expense-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" value={title} onChange={titleHandler} />
                </div>
                <div className="expense-field">
                    <label htmlFor="price">Amount</label>
                    <input type="text" id="price" name="price" value={price} onChange={priceHandler} />
                </div>
                <div className="expense-field">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" name="date" value={date} onChange={dateHandler} />
                </div>
                <div className="expense-field expense_submit">
                    <input className="button submit" type="submit" id="btn" name="btn" value="Add Expense" />
                    {/* <button className="button submit" type= "submit" id="submit"value="Submit">Submit</button> */}
                </div>

            </fieldset>
        </form>

    )
}
export default ExpenseForm;