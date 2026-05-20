import { Box } from '@mui/material'
import type { FC } from 'react'
import SidebarSwitcher from './SidebarProjectSwitcher'
import SidebarMenu from './SidebarMenu'
import SidebarPromo from './SidebarPromo'
import SidebarUser from './SidebarUser'

const Sidebar: FC = () => {
  return (
    <Box
      component='aside'
      sx={{
        width: '240px',
        backgroundColor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
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
    </Box>
  )
}

export default Sidebar
