import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { Stack, Animation } from '@devexpress/dx-react-chart';

//import { energyConsumption as data } from '../../../demo-data/data-vizualization';
const data = [
  {
    day: 'Monday', short:6, long:3,
  }, {
    day: 'Tuesday', short:3, long:4,
  }, {
    day: 'Wednesday', short:3, long:4,
  }, {
    day: 'Thursday', short:3, long:4,
  }, {
    day: 'Friday', short:5, long:2,
  }, {
    day: 'Saturday', short:0, long:1,
  }, {
    day: 'Sunday', short:3, long:0,
  }
];

const legendStyles = () => ({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
  },
});
const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
const legendLabelStyles = () => ({
  label: {
    whiteSpace: 'nowrap',
  },
});
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);

export default class WeeklyChart extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis
            max={2400}
          />

          <BarSeries
            name="Short Term"
            valueField="short"
            argumentField="day"
          />
          <BarSeries
            name="Long Term"
            valueField="long"
            argumentField="day"
          />
          <Animation />
          <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
          <Title text="Your Weekly Activity" />
          <Stack
            stacks={[
              { series: ['Hydro-electric', 'Oil', 'Natural gas', 'Coal', 'Nuclear'] },
            ]}
          />
        </Chart>
      </Paper>
    );
  }
}
