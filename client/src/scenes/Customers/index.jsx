import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Header from 'component/Header';
import React from 'react'
import { useGetCustomersQuery } from 'state/api';

const Customers = () => {
  const theme = useTheme();
  const { data, isLoading, error } = useGetCustomersQuery();
  // console.log("data",data);
  
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
      resizable: false
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
      resizable: false
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      resizable: false
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 0.5,
      resizable: false,
      renderCell: (params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
      },
    },
    {
      field: "country",
      headerName: "Country",
      flex: 0.4,
      resizable: false
    },
    {
      field: "occupation",
      headerName: "Occupation",
      flex: 1,
      resizable: false
    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.5,
      resizable: false
    },
  ];

  return (
    <Box m=" 1.5rem 2.5rem">
  <Header title="CUSTOMERS" subtitle="List of Customers" />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.alt,
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.alt,
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.alt} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
        />
      </Box> 
    </Box>
  )
}

export default Customers;