import type { FC } from 'react'
import { Badge, IconButton } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'
const HeaderNotifications: FC = () => {
  return (
    <Badge
      variant='dot'
      color='error'
      overlap='circular'
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      sx={{
        '& .MuiBadge-badge': {
          width: 8,
          height: 8,
          minWidth: 8,
          borderRadius: '50%',
          top: 2,
          right: 2,
        },
      }}
    >
      <IconButton
        sx={{
          width: 36,
          height: 36,
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 1,
          color: 'text.primary',
          bgcolor: 'background.paper',
        }}
      >
        <NotificationsIcon sx={{ fontSize: 18 }} />
      </IconButton>
    </Badge>
  )
}

export default HeaderNotifications
