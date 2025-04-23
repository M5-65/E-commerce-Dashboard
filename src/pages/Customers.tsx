import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
} from '@mui/material';

interface Customer {
  id: number;
  name: string;
  email: string;
  joinDate: string;
  orders: number;
  totalSpent: number;
}

const sampleCustomers: Customer[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinDate: '2024-01-15',
    orders: 12,
    totalSpent: 2499.99,
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    joinDate: '2024-02-01',
    orders: 8,
    totalSpent: 1799.99,
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    joinDate: '2024-02-15',
    orders: 5,
    totalSpent: 899.99,
  },
  {
    id: 4,
    name: 'Alice Brown',
    email: 'alice.brown@example.com',
    joinDate: '2024-03-01',
    orders: 3,
    totalSpent: 499.99,
  },
];

const Customers: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Customers
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Customer</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Join Date</TableCell>
              <TableCell>Orders</TableCell>
              <TableCell>Total Spent</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleCustomers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar>{customer.name.charAt(0)}</Avatar>
                    <Typography>{customer.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.joinDate}</TableCell>
                <TableCell>{customer.orders}</TableCell>
                <TableCell>${customer.totalSpent.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Customers; 