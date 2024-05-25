// Import React and Next.js Link
import React from 'react';
import Link from 'next/link';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BuildIcon from '@mui/icons-material/Build'; // or EngineeringIcon
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';

function SideMenu() {
    const menuItems = [
        { id: 1, label: 'Dashboard', Icon: DashboardIcon, href: '/' },
        { id: 2, label: 'Equipments', Icon: BuildIcon, href: '/Equipments' }, // or EngineeringIcon
        { id: 3, label: 'Categories', Icon: CategoryIcon, href: '/Categories' },
        { id: 4, label: 'Settings', Icon: SettingsIcon, href: '/Settings' },
    ];

    return (
        <div className="bg-orange-700 text-white h-full w-56 p-4">
            <h2 className="text-xl font-bold mb-4">ToolTango</h2>
            <List>
                {menuItems.map((item) => (
                    <Link key={item.id} href={item.href} passHref>
                        <ListItem disablePadding>
                            <ListItemButton className="hover:bg-orange-100 hover:text-orange-600">
                                <ListItemIcon>
                                    <item.Icon className="text-white" />
                                </ListItemIcon>
                                <ListItemText primary={item.label} className="text-white" />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    );
}

export default SideMenu;
