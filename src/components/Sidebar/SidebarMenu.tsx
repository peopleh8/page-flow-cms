import type { FC } from 'react'
import { Box, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import GroupIcon from '@mui/icons-material/Group'
import DescriptionIcon from '@mui/icons-material/Description'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'
import InfoIcon from '@mui/icons-material/Info'
import HelpIcon from '@mui/icons-material/Help'

const topMenu = [
  {
    id: 'home',
    label: 'Home',
    icon: <HomeIcon sx={{ fontSize: 16 }} />,
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: <AnalyticsIcon sx={{ fontSize: 16 }} />,
  },
  {
    id: 'clients',
    label: 'Clients',
    icon: <GroupIcon sx={{ fontSize: 16 }} />,
  },
  {
    id: 'tasks',
    label: 'Tasks',
    icon: <DescriptionIcon sx={{ fontSize: 16 }} />,
  },
]

const botMenu = [
  {
    id: 'settings',
    label: 'Settings',
    icon: <SettingsSuggestIcon sx={{ fontSize: 16 }} />,
  },
  {
    id: 'about',
    label: 'About',
    icon: <InfoIcon sx={{ fontSize: 16 }} />,
  },
  {
    id: 'help',
    label: 'Help',
    icon: <HelpIcon sx={{ fontSize: 16 }} />,
  },
]

const SidebarMenu: FC = () => {
  return (
    <Box sx={{ flex: 1, p: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 1 }}>
      <MenuList>
        {topMenu.map((menu) => (
          <MenuItem
            key={menu.id}
            sx={{
              borderRadius: 1,
              gap: 1,
              '& .MuiListItemIcon-root': {
                minWidth: 0,
              },
            }}
          >
            <ListItemIcon>{menu.icon}</ListItemIcon>
            <ListItemText>{menu.label}</ListItemText>
          </MenuItem>
        ))}
      </MenuList>
      <MenuList>
        {botMenu.map((menu) => (
          <MenuItem
            key={menu.id}
            sx={{
              borderRadius: 1,
              gap: 1,
              '& .MuiListItemIcon-root': {
                minWidth: 0,
              },
            }}
          >
            <ListItemIcon>{menu.icon}</ListItemIcon>
            <ListItemText>{menu.label}</ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </Box>
  )
}

export default SidebarMenu
