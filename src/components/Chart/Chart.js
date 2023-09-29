import ChartBar  from "./ChartBar"
import "./Chart.css"
const Chart =
    (props) => {
        const chartDatas=[{label:"Jan",value:"0"},
        {label:"Feb",value:"0"},
        {label:"March",value:"0"},
        {label:"April",value:"0"},
        {label:"May",value:"0"},
        {label:"June",value:"0"},
        {label:"July",value:"0"},
        {label:"Aug",value:"0"},
        {label:"Sept",value:"0"},
        {label:"Oct",value:"0"},
        {label:"Nov",value:"0"},
        {label:"Dec",value:"0"}];

return(
    <div >
<ChartBar />
    </div>
)
    }
    export default Chart;