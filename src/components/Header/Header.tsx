import type { FC } from 'react'
import { AppBar, Box, IconButton, Stack, Typography, useMediaQuery, type Theme } from '@mui/material'
import HeaderDatePicker from './HeaderDatePicker'
import HeaderSearch from './HeaderSearch'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import HeaderNotifications from './HeaderNotifications'
import HeaderThemeSwitcher from './HeaderThemeSwitcher'
import MenuIcon from '@mui/icons-material/Menu'
import DashboardIcon from '@mui/icons-material/Dashboard'

const Header: FC = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return isMobile ? (
    <AppBar
      position='fixed'
      elevation={0}
      sx={{ py: 2, px: { sm: 3, xs: 2 }, borderBottom: '1px solid', borderColor: 'divider' }}
    >
      <Stack
        direction='row'
        spacing={2}
      >
        <Typography
          variant='h6'
          component='h1'
          sx={{ flex: 1, display: 'flex', alignItems: 'center' }}
        >
          <DashboardIcon sx={{ fontSize: 20, mr: 1 }} />
          Dashboard
        </Typography>
        <IconButton sx={{ width: 36, height: 36, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
          <MenuIcon />
        </IconButton>
      </Stack>
    </AppBar>
  ) : (
    <Box
      component='header'
      sx={{
        mb: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
      }}
    >
      <Breadcrumbs />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <HeaderSearch />
        <HeaderDatePicker />
        <HeaderNotifications />
        <HeaderThemeSwitcher />
      </Box>
    </Box>
  )
}

export default Header
