import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const dataPointsValue = props.dataPoints.map((dataPoint) => dataPoint.value); //this will get the value from every object in the array and make a new array with only values of each object
  console.log(dataPointsValue);
  const totalMaximum = Math.max(...dataPointsValue); //pulls out every array element and make them single single element
  return (
    <div className="chart">
      {/* we can render chartBar 12 times, but then it will be static */}
      {/* So whenever we have to render Chart, we will send the dataPoints and we will map it with ChartBar, so it will be dynamic */}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label} //bcoz label bhi unique hoga
          value={dataPoint.value}
          maxValue={totalMaximum} //it is basically for a maximum amount spend in month, and using that we are gonna calculate others
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
