import type { FC } from 'react'
import { Box, LinearProgress, Typography } from '@mui/material'
import { CircleFlag } from 'react-circle-flags'

const UsingCategory: FC = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <CircleFlag
        countryCode='in'
        height='24'
        width='24'
      />
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>
          <Typography variant='body1'>India</Typography>
          <Typography variant='body1'>50%</Typography>
        </Box>
        <LinearProgress
          variant='determinate'
          value={50}
          sx={{
            borderRadius: 1,
            height: 8,
            bgcolor: 'rgb(11, 14, 20)',
            '& .MuiLinearProgress-bar': {
              bgcolor: 'rgb(143, 158, 188)',
            },
          }}
        />
      </Box>
    </Box>
  )
}

export default UsingCategory
