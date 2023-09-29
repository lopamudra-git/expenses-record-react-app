import "./YearFilter.css"
const YearFilter = (props) =>
{
    const years=["2020","2021","2022","2023","2024"];
    const selectYear=(event)=>
    {
        props.onYearSelection(event.target.value);
    }

return (
  <div className="yearFilter">
    <div className="label"><b>Apply Filter:</b></div>
<div className="drpdwn">
<select className="years" id="yeardrpdwn" name="yeardrpdn" onChange={selectYear} >
    {years.map((el,index)=>
    {
        return(<option key={index} >{el}</option>)
    })}
    </select>
</div>
</div>  
);
}
export default YearFilter;