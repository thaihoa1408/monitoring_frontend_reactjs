import React from 'react';
import * as RiIcons from 'react-icons/ri';
export const SidebarData = [
    {
        title: 'Central Monitor',
        path: '#',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Fleetview',
                path: '/central-monitor/fleetview',
            },
            {
                title: 'Site List',
                path: '/central-monitor/sitelist',
            },
            {
                title: 'Leaderboard',
                path: '/central-monitor/leaderboard',
            }
        ]
    },
    {
        title: 'Site Monitor',
        path: '#',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Site View',
                path: '/site-monitor/siteview',
            },
            {
                title: 'Site KPI',
                path: '/site-monitor/sitekpi',
            },
            {
                title: 'Device List',
                path: '/site-monitor/devicelist',
            }
        ]
    },
    {
        title: 'Alarm',
        path: '/alarm',
    },
    {
        title: 'Analyze',
        path: '/analyze',
    }
]