"use client";

import React, { useState } from 'react';
import { 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogActions, 
    TextField, 
    Button, 
    MenuItem, 
    Select, 
    InputLabel, 
    FormControl, 
    IconButton
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function AddEquipmentModal() {
    const [open, setOpen] = useState(false);
    const [select1Value, setSelect1Value] = useState('');
    const [select2Value, setSelect2Value] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [quantityValue, setQuantityValue] = useState(1);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSubmit = () => {
        console.log("Submitted!");
        handleClose();
    };

    return (
        <div className="mb-5">
            <Button variant="outlined" className="text-orange-600 border-orange-600" onClick={handleOpen}>
                <IconButton
                    className="text-orange-600 border-orange-600 p-0 text-base"
                >
                    <AddIcon className="size-5" />  Add
                </IconButton>
            </Button>
            <Dialog open={open} onClose={handleClose} className="w-full">
                <DialogContent className="bg-white text-black rounded-md w-1/2 m-0 w-full">
                    <DialogTitle className="text-xl font-bold text-gray-800 mb-6 pl-0">
                        Add Equipments
                    </DialogTitle>

                    <FormControl fullWidth className="mb-4">
                        <InputLabel>Name</InputLabel>
                        <TextField
                            value={nameValue}
                            onChange={(e) => setNameValue(e.target.value)}
                            className="w-full"
                            placeholder='Name'
                            variant="outlined"
                        />
                    </FormControl>

                    <FormControl fullWidth className="mb-4">
                        <InputLabel>Condition</InputLabel>
                        <Select
                            value={select1Value}
                            onChange={(e) => setSelect1Value(e.target.value)}
                            className="w-full"
                            variant="outlined"
                        >
                            {/* Add MenuItem components here */}
                        </Select>
                    </FormControl>

                    <FormControl fullWidth className="mb-4">
                    <InputLabel shrink>Quantity</InputLabel>
                        <TextField
                            type="number"
                            value={quantityValue}
                            onChange={(e) => setQuantityValue(parseInt(e.target.value, 10) || 0)}
                            className="w-full"
                            InputProps={{ inputProps: { min: 0 } }} // Set min value if needed
                            variant="outlined"
                        />
                    </FormControl>

                    <FormControl fullWidth className="mb-4">
                        <InputLabel>Select Category</InputLabel>
                        <Select
                            value={select2Value}
                            onChange={(e) => setSelect2Value(e.target.value)}
                            className="w-full"
                            variant="outlined"
                        >
                            {/* Add MenuItem components here */}
                        </Select>
                    </FormControl>

                    <DialogActions className="mt-4 px-0 flex justify-between flex-row-reverse">
                        <Button variant="contained" className="bg-orange-600 w-full min-h-12" onClick={handleSubmit}>
                            Add
                        </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </div>
    );
};
