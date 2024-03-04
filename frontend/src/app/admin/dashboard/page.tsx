'use client'

// ** React Imports
import { useState, useCallback } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

// ** Types Imports
import { ThemeColor } from 'src/@core/layouts/types'

// ** Custom Table Components Imports
import TableHeader from './components/TableHeader'
import { fakeUsers } from './fakeUser'

interface UserStatusType {
  [key: string]: ThemeColor
}

interface CellType {
  row: UsersType
}

const userStatusObj: UserStatusType = {
  승인: 'success',
  '승인 대기': 'warning',
  미승인: 'secondary'
}

type UsersType = {
  id: number
  role: string
  email: string
  status: string
  fullName: string
  username: string
}

const columns: GridColDef[] = [
  {
    flex: 0.1,
    minWidth: 110,
    field: 'id',
    headerName: '번호',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.id}
          </Typography>
        </Box>
      )
    }
  },
  {
    flex: 0.25,
    minWidth: 280,
    field: 'fullName',
    headerName: '이름',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography
              noWrap
              sx={{
                fontWeight: 500,
                color: 'text.secondary'
              }}
            >
              {row.fullName}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.15,
    field: 'role',
    minWidth: 170,
    headerName: '역할',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row.role}
          </Typography>
        </Box>
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 110,
    field: 'status',
    headerName: '승인 상태',
    renderCell: ({ row }: CellType) => {
      return (
        <CustomChip
          rounded
          skin='light'
          size='small'
          label={row.status}
          color={userStatusObj[row.status]}
          sx={{ textTransform: 'capitalize' }}
        />
      )
    }
  }
]

const UserList = () => {
  // ** State
  const [testUser, setTestUser] = useState(fakeUsers)
  const [value, setValue] = useState<string>('')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })

  const handleFilter = useCallback((val: string) => {
    setValue(val)
  }, [])

  return (
    <Grid container spacing={6.5}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='검색 필터' />
          <Divider sx={{ m: '0 !important' }} />
          <TableHeader value={value} handleFilter={handleFilter} />
          <DataGrid
            autoHeight
            rowHeight={62}
            rows={testUser}
            columns={columns}
            disableRowSelectionOnClick
            pageSizeOptions={[10, 25, 50]}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
          />
        </Card>
      </Grid>
    </Grid>
  )
}

export default UserList
