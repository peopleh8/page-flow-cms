import { Box, Drawer, useMediaQuery, type Theme } from '@mui/material'
import type { FC } from 'react'
import SidebarSwitcher from './SidebarProjectSwitcher'
import SidebarMenu from './SidebarMenu'
import SidebarPromo from './SidebarPromo'
import SidebarUser from './SidebarUser'

const Sidebar: FC = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'permanent'}
      anchor='left'
      sx={{
        width: '240px',
        backgroundColor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        '& .MuiDrawer-paper': {
          border: 'none',
          width: '240px',
        },
      }}
    >
      <SidebarSwitcher />
      <Box sx={{ position: 'relative', flex: 1 }}>
        <Box sx={{ position: 'absolute', inset: 0, overflow: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 1 }}>
          <SidebarMenu />
          <SidebarPromo />
        </Box>
      </Box>
      <SidebarUser />
    </Drawer>
  )
}

export default Sidebar
