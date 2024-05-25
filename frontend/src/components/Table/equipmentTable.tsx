'use client';

import React, { useState } from 'react';
import {
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Paper, 
    IconButton, 
    TextField, 
    Button, 
    MenuItem, 
    Select
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { TablePagination, SelectChangeEvent } from '@mui/material';

const createData = (
    name: string,
    condition: string,
    quantity: number,
    type: string
) => ({
    name,
    condition,
    quantity,
    type,
});

const rows = [
    createData('Item A', 'New', 100, 'Hardware'),
    createData('Item B', 'Used', 30, 'Software'),
    createData('Item C', 'New', 50, 'Hardware'),
    createData('Item D', 'Used', 2, 'Software'),
    createData('Item E', 'Damaged', 20, 'Software'),
    createData('Item F', 'Used', 12, 'Software'),
    createData('Item G', 'New', 13, 'Hardware'),
    createData('Item H', 'Used', 10, 'Software'),
    createData('Item I', 'Used', 20, 'Hardware'),
    createData('Item J', 'New', 5, 'Hardware'),
    createData('Item K', 'Used', 2, 'Hardware'),
    createData('Item L', 'Used', 4, 'Software'),
    // Add more rows as needed
];

export default function EquipmentTable () {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [filterType, setFilterType] = useState<string>("");

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleFilterChange = (event: SelectChangeEvent<string>) => {
        setFilterType(event.target.value);
    };

    const handleAddClick = () => {
        // Handle the Add button click
        alert('Add button clicked');
    };

    const filteredRows = rows.filter(row =>
        row.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (filterType === "" || row.type === filterType)
    );

    return (
        <Paper className="p-4">
            <div className="mb-4 flex items-center justify-between">
                <TextField
                    label="Search by Name"
                    variant="outlined"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <div className="flex items-center space-x-4">
                    <Select
                        value={filterType}
                        onChange={handleFilterChange}
                        displayEmpty
                        variant="outlined"
                        className="min-w-[150px]"
                    >
                        <MenuItem value="">All Types</MenuItem>
                        <MenuItem value="Hardware">Hardware</MenuItem>
                        <MenuItem value="Software">Software</MenuItem>
                    </Select>
                    <Button variant="contained" color="primary" onClick={handleAddClick}>
                        Add
                    </Button>
                </div>

            </div>
            <TableContainer component={Paper} className="shadow-md">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Condition</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.condition}</TableCell>
                                <TableCell>{row.quantity}</TableCell>
                                <TableCell>{row.type}</TableCell>
                                <TableCell>
                                    <IconButton color="primary"><EditIcon /></IconButton>
                                    <IconButton color="secondary"><DeleteIcon /></IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TablePagination
                    component="div"
                    count={filteredRows.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
        </Paper>
    );
};
