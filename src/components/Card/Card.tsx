import type { FC, ReactNode } from 'react'
import { Box, Typography } from '@mui/material'

const Card: FC<{ children: ReactNode; title?: string; withoutPadding?: boolean }> = ({ children, title, withoutPadding = false }) => {
  return (
    <Box
      sx={{
        height: '100%',
        border: '1px solid',
        borderColor: 'divider',
        p: withoutPadding ? 0 : 2,
        borderRadius: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 1,
      }}
    >
      {title && (
        <Typography
          variant='body1'
          sx={{
            mb: 1 / 2,
          }}
        >
          {title}
        </Typography>
      )}
      <Box>{children}</Box>
    </Box>
  )
}

export default Card
