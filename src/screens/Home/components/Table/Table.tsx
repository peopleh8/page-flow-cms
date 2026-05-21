import type { FC } from 'react'
import { alpha, Box, Chip, useTheme } from '@mui/material'
import { SparkLineChart } from '@mui/x-charts'
import { DataGrid, type GridColDef } from '@mui/x-data-grid'

const rows = [
  {
    id: 1,
    pageTitle: 'Homepage Overview',
    status: 'Online',
    users: 212423,
    eventCount: 8345,
    viewsPerUser: 18.5,
    averageTime: '2m 15s',
    conversions: [2, 3, 4, 5, 6, 8, 9, 12, 14, 18, 22, 24],
  },
  {
    id: 2,
    pageTitle: 'Product Details - Gadgets',
    status: 'Online',
    users: 172240,
    eventCount: 5653,
    viewsPerUser: 9.7,
    averageTime: '2m 30s',
    conversions: [1, 1, 2, 2, 3, 4, 5, 7, 8, 10, 12, 15],
  },
  {
    id: 3,
    pageTitle: 'Checkout Process - Step 1',
    status: 'Offline',
    users: 58240,
    eventCount: 3455,
    viewsPerUser: 15.2,
    averageTime: '2m 10s',
    conversions: [10, 9, 8, 7, 7, 6, 5, 5, 4, 3, 3, 2],
  },
  {
    id: 4,
    pageTitle: 'Checkout Process - Step 2',
    status: 'Offline',
    users: 58240,
    eventCount: 3455,
    viewsPerUser: 15.2,
    averageTime: '2m 10s',
    conversions: [10, 9, 8, 7, 7, 6, 5, 5, 4, 3, 3, 2],
  },
  {
    id: 5,
    pageTitle: 'Checkout Process - Step 3',
    status: 'Offline',
    users: 58240,
    eventCount: 3455,
    viewsPerUser: 15.2,
    averageTime: '2m 10s',
    conversions: [10, 9, 8, 7, 7, 6, 5, 5, 4, 3, 3, 2],
  },
  {
    id: 6,
    pageTitle: 'Checkout Process - Step 4',
    status: 'Offline',
    users: 58240,
    eventCount: 3455,
    viewsPerUser: 15.2,
    averageTime: '2m 10s',
    conversions: [10, 9, 8, 7, 7, 6, 5, 5, 4, 3, 3, 2],
  },
]

const paginationModel = { page: 0, pageSize: 10 }

const Table: FC = () => {
  const theme = useTheme()

  const columns: GridColDef[] = [
    {
      field: 'pageTitle',
      headerName: 'Page Title',
      flex: 1.4,
      minWidth: 220,
      resizable: false,
      hideable: false,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      resizable: false,
      hideable: false,

      renderCell: (params) => {
        const isOnline = params.value === 'Online'

        return (
          <Chip
            label={params.value}
            size='small'
            sx={{
              height: 22,
              fontSize: 12,
              fontWeight: 700,
              color: isOnline ? 'success.light' : 'text.secondary',
              bgcolor: isOnline ? alpha(theme.palette.success.main, 0.18) : alpha(theme.palette.text.secondary, 0.12),
              border: '1px solid',
              borderColor: isOnline ? alpha(theme.palette.success.main, 0.28) : alpha(theme.palette.text.secondary, 0.18),
            }}
          />
        )
      },
    },
    {
      field: 'users',
      headerName: 'Users',
      width: 130,
      resizable: false,
      hideable: false,

      valueFormatter: (value) => Number(value).toLocaleString(),
    },
    {
      field: 'eventCount',
      headerName: 'Event Count',
      width: 140,
      resizable: false,
      hideable: false,

      valueFormatter: (value) => Number(value).toLocaleString(),
    },
    {
      field: 'viewsPerUser',
      headerName: 'Views per User',
      width: 150,
      resizable: false,
      hideable: false,
    },
    {
      field: 'averageTime',
      headerName: 'Average Time',
      width: 150,
      resizable: false,
      hideable: false,
    },
    {
      field: 'conversions',
      headerName: 'Daily Conversions',
      width: 170,
      sortable: false,
      resizable: false,
      hideable: false,
      renderCell: (params) => (
        <Box sx={{ width: '100%', height: 36, color: 'primary.main' }}>
          <SparkLineChart
            data={params.value}
            height={32}
            plotType='bar'
            color='currentColor'
            showHighlight={false}
            showTooltip
            margin={{
              top: 10,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          />
        </Box>
      ),
    },
  ]

  return (
    <Box>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
        sx={{
          bgcolor: 'transparent',
          borderColor: 'divider',
          color: 'text.primary',

          '& .MuiDataGrid-columnHeaders': {
            bgcolor: 'transparent',
            borderBottom: '1px solid',
            borderColor: 'divider',
          },

          '& .MuiDataGrid-columnHeader': {
            bgcolor: 'background.paper',
          },

          '& .MuiDataGrid-footerContainer': {
            bgcolor: 'transparent',
          },

          '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: 700,
            fontSize: 13,
          },

          '& .MuiDataGrid-cell': {
            borderBottom: '1px solid',
            borderColor: 'divider',
            fontSize: 13,
            fontWeight: 600,
          },

          '& .MuiDataGrid-row:hover': {
            bgcolor: 'action.hover',
          },

          '& .MuiDataGrid-selectedRowCount': {
            display: 'none',
          },

          '& .MuiDataGrid-columnHeader--last .MuiSvgIcon-fontSizeMedium': {
            display: 'none',
          },
        }}
      />
    </Box>
  )
}

export default Table
