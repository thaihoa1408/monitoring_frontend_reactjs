import React, {useState, useEffect} from 'react';
import "./TableInverter.css";
import { InverterData } from './InverterData';
import axios from 'axios';
function TableInverter(props) {
    const [data,setData] = useState([]);
    useEffect(() => {
        const interval = setInterval(() => {
          axios.get("http://localhost:3000/entities?type=inverter")
        .then(response => setData(response.data));
        }, 1000);
        return () => clearInterval(interval);
        
      }, []);
    return (
        <div className="table-container">
            <h1 className="table-title">Inverter Ranking</h1>
            <table class="table-scroll">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Yield</th>
                    <th>Production(kWh)</th>
                    <th>Power Ratio(%)</th>
                    </tr>
                </thead>
                <tbody class="body-half-screen">
                {data.map((item, index) => {
                                        return (
                                            <tr>
                                                <td>{item.name}</td>
                                                <td>{item.yield}</td>
                                                <td>{item.production}</td>
                                                <td>{item.power_ratio}</td>
                                                </tr>
                                        );
                                    })}
                    
                    
                </tbody>
            </table>
        </div>
    );
}

export default TableInverter;