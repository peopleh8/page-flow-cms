import type { FC } from 'react'
import { Box } from '@mui/material'
import Card from '../../../../components/Card/Card'
import UsingChart from './UsingChart'
import UsingCategories from './UsingCategories'

const Using: FC = () => {
  return (
    <Card title='Users by country'>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <UsingChart />
        <UsingCategories />
      </Box>
    </Card>
  )
}

export default Using
