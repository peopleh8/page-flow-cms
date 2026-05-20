import type { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'

const NotFoundLayout: FC = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  )
}

export default NotFoundLayout
