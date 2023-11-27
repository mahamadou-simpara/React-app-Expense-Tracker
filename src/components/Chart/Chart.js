import ChartBar from "./ChartBar";
import './Chart.css'

export default function Chart({ dataPoints }) {
  
  const DataPointsValue = dataPoints.map(dataPoint => dataPoint.value);
  const totalMaxium = Math.max(...DataPointsValue);
  // console.log(totalMaxium);

  return (
    <div className="chart">
      {dataPoints.map( dataPoint => <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={totalMaxium}
        />)
      }
    </div>
  );
}
