import type { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'

const AuthLayout: FC = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  )
}

export default AuthLayout
