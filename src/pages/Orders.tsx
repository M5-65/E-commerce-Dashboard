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
  Chip,
} from '@mui/material';

interface Order {
  id: number;
  customer: string;
  date: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  total: number;
}

const sampleOrders: Order[] = [
  {
    id: 1,
    customer: 'John Doe',
    date: '2024-03-15',
    status: 'delivered',
    total: 1299.99,
  },
  {
    id: 2,
    customer: 'Jane Smith',
    date: '2024-03-14',
    status: 'shipped',
    total: 799.99,
  },
  {
    id: 3,
    customer: 'Bob Johnson',
    date: '2024-03-14',
    status: 'processing',
    total: 149.99,
  },
  {
    id: 4,
    customer: 'Alice Brown',
    date: '2024-03-13',
    status: 'pending',
    total: 249.99,
  },
];

const getStatusColor = (
  status: Order['status']
): 'warning' | 'info' | 'primary' | 'success' => {
  const colors: Record<Order['status'], 'warning' | 'info' | 'primary' | 'success'> = {
    pending: 'warning',
    processing: 'info',
    shipped: 'primary',
    delivered: 'success',
  };
  return colors[status];
};

const Orders: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Orders
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <Chip
                    label={order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    color={getStatusColor(order.status)}
                    size="small"
                  />
                </TableCell>
                <TableCell>${order.total.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Orders; 