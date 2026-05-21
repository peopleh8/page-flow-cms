import type { FC } from 'react'
import { Button, Paper, Typography } from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

const Promo: FC = () => {
  return (
    <Paper sx={{ height: '100%', boxShadow: 'none', backgroundImage: 'none', p: 2, '& .MuiBox-root': { height: '100%' } }}>
      <AutoAwesomeIcon sx={{ fontSize: 20 }} />
      <Typography
        variant='body1'
        sx={{ mb: 1 / 1.8 }}
      >
        Explore your data
      </Typography>
      <Typography
        variant='body1'
        sx={{ color: 'text.secondary', mb: 2 }}
      >
        Uncover performance and visitor insights with our data wizardry.
      </Typography>
      <Button
        variant='contained'
        color='secondary'
        sx={{ height: 36 }}
        endIcon={<ChevronRightIcon />}
      >
        Get Insights
      </Button>
    </Paper>
  )
}

export default Promo
