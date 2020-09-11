import React, { Component } from "react";
import ReactDOM from 'react-dom';
import ReactApexChart from "react-apexcharts";
import "./FriendsChart.css"

class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          data: [44, 55, 41, 64, 22, 43, 21]
        }, {
          data: [53, 32, 33, 52, 13, 44, 32]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 430
          },
          plotOptions: {
            bar: {
              horizontal: true,
              dataLabels: {
                position: 'top',
              },
            }
          },
          dataLabels: {
            enabled: true,
            offsetX: -6,
            style: {
              fontSize: '12px',
              colors: ['#fff']
            }
          },
          stroke: {
            show: true,
            width: 1,
            colors: ['#fff']
          },
          xaxis: {
            categories: ["Elizabeth Yu", "Michael Phelps", "John Doe", "Yuki"],
          },
        },
      
      
      };
    }

  

    render() {
      return (
        

        <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={430} />
        </div>


      );
    }
  }

  export default ApexChart;

//   const domContainer = document.querySelector('#app');
//   ReactDOM.render(React.createElement(ApexChart), domContainer);
