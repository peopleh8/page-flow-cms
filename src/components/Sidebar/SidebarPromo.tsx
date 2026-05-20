import type { FC } from 'react'
import { Box, Button, Typography } from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'

const SidebarPromo: FC = () => {
  return (
    <Box sx={{ p: 1 * 1.5 }}>
      <Box
        sx={{
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 1,
          p: 2,
        }}
      >
        <AutoAwesomeIcon sx={{ fontSize: 20 }} />
        <Typography
          variant='body1'
          sx={{ mb: 1 / 1.8 }}
        >
          Plan about to expire
        </Typography>
        <Typography
          variant='body2'
          sx={{ color: 'text.secondary', mb: 2 }}
        >
          Enjoy 10% off when renewing your plan today.
        </Typography>
        <Button
          variant='contained'
          color='secondary'
          sx={{ width: '100%', height: 36 }}
        >
          Renew Now
        </Button>
      </Box>
    </Box>
  )
}

export default SidebarPromo
