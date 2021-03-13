import React, { useState } from 'react';
import './WaveWidget.css';
import * as AiIcons from 'react-icons/ai';
function WaveWidget(props) {
    
    const [select,setSelect] = useState(false)
    const handleSelect = () =>{
        setSelect(!select);
    }
    const [name,setName] = useState("Production")
    const [list,setList] = useState([true,false])
    const handleSetlist = id =>{
        if(id===0){
            setList([true,false])
            setName("Production")
            setSelect(!select)
        }
        else if(id===1){
            setList([false,true])
            setName("Yield")
            setSelect(!select)
        }
    }
    return (
        <div className="box-wave">
            <div className="wave-header">
                <div>{name}</div>
                <AiIcons.AiOutlineSetting className={select ? "setting-icon active" : "setting-icon"} onClick={handleSelect}/>
            </div>
            <div className={select ? "dropdown-list": "dropdown-list-inactive"}>
                <div>
                    <div className={list[0] ? "icon-click active" : "icon-click"} onClick={()=>handleSetlist(0)}></div>
                    <div>Production</div>
                </div>
                <div>
                    <div className={list[1] ? "icon-click active" : "icon-click"} onClick={()=>handleSetlist(1)}></div>
                    <div>Yield</div>
                </div>
            </div>
            <div className="wave-body">
            <svg className="wave" viewBox="0 0 1320 100">
                <path fill-opacity="0.7" d="
                M0,192
                C220,100,440,100,660,192
                C880,290,1100,290,1320,192
                L1320 500
                L0 500
                " fill="#000"/>
                <path fill-opacity="0.7" d="
                M0,192
                C220,100,440,100,660,192
                C880,290,1100,290,1320,192
                L1320 500
                L0 500
                " fill="#fff"/>
                <path fill-opacity="0.7" d="
                M0,192
                C220,100,440,100,660,192
                C880,290,1100,290,1320,192
                L1320 500
                L0 500
                " fill="#ee5253"/>
                <path fill-opacity="0.7" d="
                M0,192
                C220,100,440,100,660,192
                C880,290,1100,290,1320,192
                L1320 500
                L0 500
                " fill="#00d2d3"/>
            </svg>
            <div className={list[0] ? "tit" : "tit-inactive"}>
                <div>870.75</div>
                <div>Kwh</div>
            </div>
            <div className={list[1] ? "tit" : "tit-inactive"}>
                <div>3.4h</div>    
            </div>
            </div>
</div>
    );
}

export default WaveWidget;