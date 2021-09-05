import ChartBar from '../Chart/ChartBar';
import './Chart.css';

const Chart = (props) => {

    const dataPointsValue = props.dataPoints.map(dataPoint=> dataPoint.value);
    const totalMaximum = Math.max(...dataPointsValue);

    return (<div className='chart'>
        {
            props.dataPoints.map(dataPoint=>{
                return <ChartBar 
                value={dataPoint.value} 
                maxValue={totalMaximum} 
                key={dataPoint.id} 
                label={dataPoint.label} />
            })
        }

    </div>);
};


export default Chart;