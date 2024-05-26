'use client';

import React, { useState } from 'react';
import SideMenu from "@/components/sidemenu";
import { 
	AppBar, 
	Toolbar, 
	Typography, 
	Paper, 
	FormControlLabel, 
	Switch, FormGroup, 
	FormControl, 
	FormLabel, 
	Box, 
	Button 
} from '@mui/material';

export default function Settings() {
	const [darkMode, setDarkMode] = useState(false); // State for dark mode toggle

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

	return (
		<div className="flex h-screen">
			<SideMenu />
			<div className="flex-1 p-10 overflow-y-auto">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-3xl">Settings</h2>
				</div>

                {/* Main content area */}
                <div className="p-4">
                    <Paper className="p-6 mb-6">
                        <Typography variant="h5" gutterBottom>
                            Appearance
                        </Typography>
                        {/* Dark mode toggle */}
                        <FormControlLabel
                            control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
                            label="Dark Mode"
                        />
                    </Paper>

                    <Paper className="p-6 mb-6">
                        <Typography variant="h5" gutterBottom>
                            Notifications
                        </Typography>
                        {/* Add notification settings here */}
                        <FormGroup>
                            <FormControlLabel control={<Switch />} label="Email Notifications" />
                            <FormControlLabel control={<Switch />} label="Push Notifications" />
                        </FormGroup>
                    </Paper>

                    <Paper className="p-6 mb-6">
                        <Typography variant="h5" gutterBottom>
                            Account
                        </Typography>
                        {/* Add account settings here */}
                        <Button variant="contained" className="bg-orange-600 hover:bg-orange-800">Change Password</Button>
                    </Paper>
                </div>
			</div>
		</div>
	);
}
