import "./Card.css";
function Card(props)
{
    const classes="card "+ props.className;
return(
    // wrapper div
    <div className={classes}>
{props.children}
    </div>
)
}
export default Card;