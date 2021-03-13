import React, { Component } from 'react';
import ReactApexChart from "react-apexcharts";
import "./LineColumnChart.css";
/*class LineColumnChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
          series: [{
            name: 'Production',
            type: 'column',
            data: [0, 0, 0, 0, 0, 0, 38, 257, 484, 702, 849, 301,50,60,70,80]
          }, {
            name: 'Irradiation',
            type: 'line',
            data: [0, 0, 0, 0, 0, 0, 38, 214, 473, 692, 841, 302,50,60,70,80]
          }],
          options: {
            chart: {
              //height: 350,
              type: 'line',
              toolbar: {
                show: false
              }
              
            },
            colors: ['#00f9fc', '#d0ff00'],
            stroke: {
              width: [0, 2]
            },
            title: {
              //text: 'Traffic Sources',
            },
            legend:{
              show: true,
              labels:{
                colors: "#f1f1f1"
              }
            },
            dataLabels: {
              enabled: false,
            },
            labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00','12:00','13:00','14:00','15:00'],
            xaxis: {
              labels:{
                style:{
                  colors: "#f1f1f1",
                }
              }
            },
            yaxis: [{
              title: {
                text: 'Production',
                style:{
                  color: "white",
                  fontWeight: 600,
                  fontSize: 14
                }
              },
              labels:{
                style:{
                  colors: "#f1f1f1"
                }
              }
            }, {
              opposite: true,
              title: {
                text: 'Irradiation',
                style:{
                  color: "white",
                  fontWeight: 600,
                  fontSize: 14
                }
              },
              labels:{
                style:{
                  colors: "#f1f1f1"
                }
              }
              
            }]
          },
        
        
        };
      }
    render() {
        return (
            <div className="line-column-chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={300} />
            </div>
        );
    }
}
export default LineColumnChart;*/


function LineColumnChart(props) {
  const series = [{
    name: 'Production',
    type: 'column',
    data: props.data1
  }, {
    name: 'Irradiation',
    type: 'line',
    data: props.data2
  }]
  const options = {
    chart: {
      //height: 350,
      type: 'line',
      toolbar: {
        show: false
      }
      
    },
    colors: ['#00f9fc', '#d0ff00'],
    stroke: {
      width: [0, 2]
    },
    title: {
      //text: 'Traffic Sources',
    },
    legend:{
      show: true,
      labels:{
        colors: "#f1f1f1"
      }
    },
    dataLabels: {
      enabled: false,
    },
    labels: props.data3,
    xaxis: {
      labels:{
        style:{
          colors: "#f1f1f1",
        }
      }
    },
    yaxis: [{
      title: {
        text: 'Production',
        style:{
          color: "white",
          fontWeight: 600,
          fontSize: 14
        }
      },
      labels:{
        style:{
          colors: "#f1f1f1"
        }
      }
    }, {
      opposite: true,
      title: {
        text: 'Irradiation',
        style:{
          color: "white",
          fontWeight: 600,
          fontSize: 14
        }
      },
      labels:{
        style:{
          colors: "#f1f1f1"
        }
      }
      
    }]
  }
  return (
    <div className="line-column-chart">
        <ReactApexChart options={options} series={series} type="line" height={300} />
    </div>
  );
}

export default LineColumnChart;