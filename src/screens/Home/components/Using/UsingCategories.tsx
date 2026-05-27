import type { FC } from 'react'
import { Box, Stack } from '@mui/material'
import UsingCategory from './UsingCategory'

const UsingCategories: FC = () => {
  return (
    <Box>
      <Stack spacing={2}>
        <UsingCategory />
        <UsingCategory />
        <UsingCategory />
        <UsingCategory />
      </Stack>
    </Box>
  )
}

export default UsingCategories
