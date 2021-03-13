import React, { useState,useEffect } from 'react';
import "./SiteView.css";
import LineColumnChart from './line-column-chart/LineColumnChart';
import LineChart from './line-chart/LineChart';
import TableInverter from './table-inverter/TableInverter';
import axios from "axios";
function SiteView(props) {
      const [select,setSelect] = useState([true,false,false,false]);
      const ChangeTime=id=>{
        const arr = [false,false,false,false];
        for(let i = 0; i < 4; i++){
            if(i===id){
                arr[i] = true;
            }
            else arr[i] = false;
        };
        setSelect(arr)
        
      }
      const [state, setState] = useState({
        data1: [],
        data2: [],
        data3: []
      });
      const setData = data =>{
        const data1 =[];
        const data2= [];
        const data3= [];
        data.map(item =>{
          data1.push(item.production);
          data2.push(item.irradiation);
          data3.push(item.time)
        });
        setState({
          data1: data1,
          data2: data2,
          data3: data3
        })
        
      }
      useEffect(() => {
        const interval = setInterval(() => {
          axios.get("http://localhost:3000/entities?type=site")
        .then(response => setData(response.data));
        }, 1000);
        return () => clearInterval(interval);
        
      }, []);
      
    return (
        <div className="siteview">
            <div className="background-siteview"></div>
            <div className="siteview-header">Total Renewables</div>
            <div className="button-select">
                <button className={select[0] ? "btn-bg" : "btn-bg-inactive" } onClick={()=>ChangeTime(0)}>Daily</button>
                <button className={select[1] ? "btn-bg" : "btn-bg-inactive" } onClick={()=>ChangeTime(1)}>Monthly</button>
                <button className={select[2] ? "btn-bg" : "btn-bg-inactive" } onClick={()=>ChangeTime(2)}>Yearly</button>
                <button className={select[3] ? "btn-bg" : "btn-bg-inactive" } onClick={()=>ChangeTime(3)}>Total</button>
            </div>
            <div className={select[0] ? "row-siteview" : "row-siteview inactive" }>
                <div className="row-siteview-header">
                    <div>Capacity 1.19MWp</div>
                    <div>Weather- </div>
                    <div>Temp-C</div>
                    <div>Irradiation 4.86 kWh/㎡</div>
                    <div>Yield 4.1h</div>
                    <div>Production 4.94 MWh</div>
                    <div>Power Ratio 69.02%</div>
                </div>
                <div className="row-siteview-body">
                <LineColumnChart data1={state.data1} data2={state.data2} data3={state.data3}/>
                <LineChart />
                </div>
            </div>
            <div className={select[1] ? "row-siteview" : "row-siteview inactive" }>
            <div className="row-siteview-header">
                    <div>Capacity 1.19MWp</div>
                    <div>Weather- </div>
                    <div>Temp-C</div>
                    <div>Irradiation 4.86 kWh/㎡</div>
                    <div>Yield 4.1h</div>
                    <div>Production 4.94 MWh</div>
                    <div>Power Ratio 69.02%</div>
                </div>
                <div className="row-siteview-body">
                <LineChart />
                <LineColumnChart data1={state.data1} data2={state.data2} data3={state.data3}/>
                </div> 
            </div>
            <div className={select[2] ? "row-siteview" : "row-siteview inactive" }>  
            <div className="row-siteview-header">
                    <div>Capacity 1.19MWp</div>
                    <div>Weather- </div>
                    <div>Temp-C</div>
                    <div>Irradiation 4.86 kWh/㎡</div>
                    <div>Yield 4.1h</div>
                    <div>Production 4.94 MWh</div>
                    <div>Power Ratio 69.02%</div>
                </div>
                <div className="row-siteview-body">
                <LineColumnChart data1={state.data1} data2={state.data2} data3={state.data3}/>
                </div>   
            </div>
            <div className="">
                <TableInverter />
            </div>
            
        </div>
    );
}

export default SiteView;