import { Box } from '@mui/material'
import { PieChart } from '@mui/x-charts'
import type { FC } from 'react'

const dataC = [
  { id: 0, value: 50000, label: 'India', color: '#94a0b8' },
  { id: 1, value: 35000, label: 'USA', color: '#566481' },
  { id: 2, value: 10000, label: 'Brazil', color: '#47536b' },
  { id: 3, value: 5000, label: 'Other', color: '#333c4d' },
]

const UsingChart: FC = () => {
  return (
    <Box>
      <PieChart
        width={240}
        height={220}
        series={[
          {
            data: dataC,
            innerRadius: 74,
            outerRadius: 98,
            paddingAngle: 0,
            cornerRadius: 0,
            cx: 120,
            cy: 110,

            highlightScope: {
              fade: 'global',
              highlight: 'item',
            },

            highlighted: {
              additionalRadius: 0,
            },

            faded: {
              additionalRadius: -4,
              color: '#2d3543',
            },
          },
        ]}
        slotProps={{
          legend: {
            sx: {
              display: 'none',
            },
          },
        }}
      >
        <text
          x={125}
          y={110}
          textAnchor='middle'
          dominantBaseline='middle'
          fill='#94a0b8'
          fontSize='20'
          fontWeight='600'
        >
          98.5K
        </text>
        <text
          x={125}
          y={132}
          textAnchor='middle'
          dominantBaseline='middle'
          fill='#94a0b8'
          fontSize='14'
          fontWeight='400'
        >
          Total
        </text>
      </PieChart>
    </Box>
  )
}

export default UsingChart
