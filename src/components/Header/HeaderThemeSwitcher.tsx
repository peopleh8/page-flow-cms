import { useState, type FC, type MouseEvent } from 'react'
import { Box, IconButton, MenuItem, MenuList, Popover } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

const HeaderThemeSwitcher: FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'header-theme-switcher-popover' : undefined

  return (
    <Box>
      <IconButton
        aria-describedby={id}
        onClick={handleClick}
        sx={{
          width: 36,
          height: 36,
          border: '1px solid',
          borderColor: 'primary.main',
          borderRadius: 1,
          color: 'primary.main',
          bgcolor: 'background.paper',
        }}
      >
        <DarkModeIcon sx={{ fontSize: 18 }} />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        slotProps={{
          paper: {
            sx: {
              bgcolor: 'background.paper',
              backgroundImage: 'none',
              mt: 1,
              width: 152,
              p: 0.5,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 1.5,
              boxShadow: 'none',
            },
          },
        }}
      >
        <MenuList
          dense
          disablePadding
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 0.5,
          }}
        >
          <MenuItem
            selected
            sx={{ borderRadius: 1 }}
          >
            System
          </MenuItem>
          <MenuItem sx={{ borderRadius: 1 }}>Light</MenuItem>
          <MenuItem sx={{ borderRadius: 1 }}>Dark</MenuItem>
        </MenuList>
      </Popover>
    </Box>
  )
}

export default HeaderThemeSwitcher
