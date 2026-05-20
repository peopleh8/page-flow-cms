import type { FC } from 'react'
import { Box } from '@mui/material'
import HeaderDatePicker from './HeaderDatePicker'
import HeaderSearch from './HeaderSearch'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import HeaderNotifications from './HeaderNotifications'
import HeaderThemeSwitcher from './HeaderThemeSwitcher'

const Header: FC = () => {
  return (
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
