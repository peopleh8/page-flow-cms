import type { FC } from 'react'
import { Avatar, Box, Divider, IconButton, Typography } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const SidebarUser: FC = () => {
  return (
    <Box>
      <Divider />
      <Box
        sx={{
          padding: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar sx={{ bgcolor: deepOrange[500], width: 36, height: 36 }}>A</Avatar>
          <Box sx={{ flex: 1 }}>
            <Typography variant='body1'>John Doe</Typography>
            <Typography
              variant='body2'
              sx={{ color: 'text.secondary' }}
            >
              riley@email.com
            </Typography>
          </Box>
        </Box>
        <IconButton sx={{ width: 36, height: 36, borderRadius: 1, border: '1px solid', borderColor: 'divider' }}>
          <MoreVertIcon sx={{ fontSize: 20 }} />
        </IconButton>
      </Box>
    </Box>
  )
}

export default SidebarUser
