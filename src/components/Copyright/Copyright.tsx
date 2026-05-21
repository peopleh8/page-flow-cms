import type { FC } from 'react'
import { Box } from '@mui/material'

const Copyright: FC = () => {
  return <Box sx={{ textAlign: 'center', color: 'text.secondary', pt: 2 }}>Copyright © Andrew Fesun {new Date().getFullYear()}.</Box>
}

export default Copyright
