import React, { useState } from 'react';
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import "./Sidebar.css";
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';

function Sidebar(props) {
    const [sidebar,setSidebar]= useState(true);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <nav>
            <div className="navbars">
                <Link className="navbar-icon" to='#' onClick={showSidebar}>
                    <FaIcons.FaBars />
                </Link>
                <div>Dashboard</div>
            </div>
            <nav className={sidebar ? 'sidebar':'sidebar active'}>
                <div className="sidebar-wrap">
                    {SidebarData.map((item, index) => {
                        return <SubMenu item={item} key={index} />;
                     })}
                </div>
            </nav>
        </nav>
    );
}

export default Sidebar;