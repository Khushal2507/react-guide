import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%"; //to make it string
    console.log(barFillHeight);
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        {/* we want the height of the bar jitna usko fill karna hai depends on dataPoint.value passed from Chart ka component */}
        {/* we have to send a JS object in the style componenet to render css dynamically */}
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
