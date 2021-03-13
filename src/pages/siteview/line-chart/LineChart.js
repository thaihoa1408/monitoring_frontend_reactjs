import React from 'react';
import "./LineChart.css";
import {Bar, Line, Pie} from "react-chartjs-2";
function LineChart(props) {
    var chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June','July','Aug','Sep','Oct','Nov','Dec'],
        datasets: [
            {
                data: [100, 203, 210, 400, 410, 320, 290, 150, 500, 390,540,620],
                label: "Electric",
                borderColor: "#ff04f7",
                fill: false
              },
              {
                data: [282, 350, 411, 502, 635, 400, 247, 400, 500, 526,467,650],
                label: "Gas",
                borderColor: "#82ee35",
                fill: false
              }
        ]
      }  
    return (
        <div className="LineChartContainer">
            <div className="linechart">
            <Line data={chartData} 
            options={{
                title: {
                  display: false,
                  text: "World population per region (in millions)",
                  fontColor: 'black'
                },
                legend: {
                  display: true,
                  position: "bottom",
                  fontSize: 50,
                  labels:{
                      fontColor: 'white'
                  }
                },
                scales: {
                  yAxes: [{
                      display: true,
                      scaleLabel: {
                          display: true,
                          labelString: 'Total Cost',
                          fontColor: 'White',
                          fontSize: 14
                      },
                      ticks: {
                          beginAtZero:true,
                          fontColor: 'white'
                      },
                      gridLines: {
                          color: "white",
                      }
                  }],
                xAxes: [{
                      ticks: {
                          fontColor: 'white'
                      },
                      gridLines: {
                          color: "",
                      }
                  }]
              } 
              }} />
              </div>
        </div>
    );
}

export default LineChart;