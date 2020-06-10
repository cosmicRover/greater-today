// import React from 'react';
// import FusionCharts from "fusioncharts";
// import charts from "fusioncharts/fusioncharts.charts";
// import ReactFusioncharts from "react-fusioncharts";

// // Resolves charts dependancy


// charts(FusionCharts);

// const dataSource = {
//   chart: {
//     caption: "Yearly sales of iPhone",
//     yaxisname: "Number of units sold",
//     subcaption: "2007-2016",
//     plottooltext: "<div><b>$dataValue</b> iPhones sold in $label</div>",
//     theme: "fusion"
//   },
//   data: [
//     {
//       label: "2007",
//       value: "1380000"
//     },
//     {
//       label: "2008",
//       value: "1450000"
//     },
//     {
//       label: "2009",
//       value: "1610000"
//     },
//     {
//       label: "2010",
//       value: "1540000"
//     },
//     {
//       label: "2011",
//       value: "1480000"
//     },
//     {
//       label: "2012",
//       value: "1573000"
//     },
//     {
//       label: "2013",
//       value: "2232000"
//     },
//     {
//       label: "2014",
//       value: "2476000"
//     },
//     {
//       label: "2015",
//       value: "2832000"
//     },
//     {
//       label: "2016",
//       value: "3808000"
//     }
//   ]
// };

// class JSChart extends React.Component {
//   render() {
//     return (
//       <ReactFusioncharts
//         type="splinearea"
//         width="100%"
//         height="30%"
//         dataFormat="JSON"
//         dataSource={dataSource}
//       />
//     );
//   }
// }

// export default JSChart;

import React from 'react';
//import ApexCharts from 'apexcharts'

import ReactApexChart from "react-apexcharts";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
    
      series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
      options: {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      },
    
    
    };
  }



  render() {
    return (
      

<div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="area" height={300} />
</div>


    );
  }
}

export default ApexChart;