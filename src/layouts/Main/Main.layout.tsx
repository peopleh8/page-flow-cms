import type { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'
import Copyright from '../../components/Copyright/Copyright'

const MainLayout: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100svh',
      }}
    >
      <Sidebar />
      <Box
        component='main'
        sx={{
          flex: 1,
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            overflow: 'auto',
            py: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Container
            maxWidth={false}
            sx={{
              maxWidth: '1700px',
            }}
          >
            <Header />
            <Box>
              <Outlet />
            </Box>
          </Container>
          <Copyright />
        </Box>
      </Box>
    </Box>
  )
}

export default MainLayout
