import type { FC } from 'react'
import { Box, Grid, Stack, Typography, useTheme } from '@mui/material'
import { SparkLineChart, type SparkLineChartProps } from '@mui/x-charts/SparkLineChart'
import StatsCard from './components/StatsCard/StatsCard'
import Promo from './components/Promo/Promo'
import Table from './components/Table/Table'
import dayjs from 'dayjs'
import { BarChart, LineChart } from '@mui/x-charts'
import ProductTree from './components/ProductTree/ProductTree'
import Using from './components/Using/Using'

const userData = [20, 16, 21, 22, 21, 25, 18, 21, 22, 21, 23, 24, 24, 25, 24, 25, 24, 25, 24, 31, 24, 28, 27, 28, 27, 30, 38, 40]
const conversionsData = [20, 16, 21, 22, 21, 25, 18, 21, 22, 21, 23, 24, 24, 25, 24, 25, 24, 25, 24, 31, 24, 28, 27, 28, 27, 30, 38, 40]
const eventsData = [20, 16, 21, 22, 21, 25, 18, 21, 22, 21, 23, 24, 24, 25, 24, 25, 24, 25, 24, 31, 24, 28, 27, 28, 27, 30, 38, 40]

const xLabels = Array.from({ length: 30 }, (_, index) => `Apr ${index + 1}`)
const xLabels2 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']

const data1 = [
  1200, 2200, 1800, 2400, 1700, 2100, 2600, 2400, 2700, 2800, 2600, 3100, 3500, 3800, 3300, 3900, 4100, 3500, 4300, 4500, 4000, 4800, 5100, 5300, 4900, 5500, 5700, 6000, 6200,
  6400,
]
const data2 = [
  500, 900, 700, 1600, 1500, 2100, 2200, 1900, 2700, 3100, 2400, 3300, 3900, 4100, 4500, 4200, 5100, 4600, 5000, 5500, 5700, 6100, 6300, 6500, 5800, 6700, 7100, 7200, 7500, 7800,
]
const data3 = [
  300, 600, 500, 700, 800, 900, 2300, 2100, 2200, 3000, 2600, 3200, 3500, 3800, 3600, 4300, 4200, 4000, 4600, 5000, 5100, 5600, 6100, 6600, 6500, 6800, 7000, 7200, 7600, 8000,
]

const data4 = [2200, 3800, 2900, 4100, 3200, 2600, 2900]
const data5 = [3000, 4200, 2400, 2200, 5000, 3800, 2400]
const data6 = [4000, 2200, 3100, 4600, 3800, 1800, 2200]

const Home: FC = () => {
  const theme = useTheme()

  const getXLabels = (data: number[]) =>
    data.map((_, index) =>
      dayjs()
        .subtract(data.length - 1 - index, 'day')
        .format('MMM D'),
    )

  const getChartProps = (data: number[], change?: number): SparkLineChartProps => ({
    data,
    xAxis: {
      data: getXLabels(data),
      scaleType: 'point',
    },
    height: 50,
    curve: 'linear',
    color: change !== undefined ? (change >= 0 ? theme.palette.success.main : theme.palette.error.main) : theme.palette.text.secondary,
    showTooltip: true,
    showHighlight: true,
    margin: {
      top: 8,
      right: 8,
      bottom: 8,
      left: 8,
    },
  })

  return (
    <Stack spacing={3}>
      <Box>
        <Typography
          variant='h4'
          sx={{
            mb: 2,
          }}
        >
          Overview
        </Typography>
        <Grid
          container
          spacing={2}
        >
          <Grid size={{ md: 3, xs: 12 }}>
            <StatsCard
              title='Users'
              subtitle='Last 30 days'
              value='14k'
              change={25}
            >
              <SparkLineChart {...getChartProps(userData, 25)} />
            </StatsCard>
          </Grid>
          <Grid size={{ md: 3, xs: 12 }}>
            <StatsCard
              title='Conversions'
              subtitle='Last 30 days'
              value='325'
              change={-25}
            >
              <SparkLineChart {...getChartProps(conversionsData, -25)} />
            </StatsCard>
          </Grid>
          <Grid size={{ md: 3, xs: 12 }}>
            <StatsCard
              title='Event count'
              subtitle='Last 30 days'
              value='200k'
              change={5}
              default
            >
              <SparkLineChart {...getChartProps(eventsData)} />
            </StatsCard>
          </Grid>
          <Grid size={{ md: 3, xs: 12 }}>
            <StatsCard withoutPadding>
              <Promo />
            </StatsCard>
          </Grid>
          <Grid size={{ md: 6, xs: 12 }}>
            <StatsCard
              title='Sessions'
              subtitle='Sessions per day for the last 30 days'
              value='13,277'
              change={35}
              align='start'
            >
              <LineChart
                height={250}
                xAxis={[
                  {
                    data: xLabels,
                    scaleType: 'point',
                    tickLabelInterval: (_, index) => index % 5 === 4 || index === 29,
                  },
                ]}
                yAxis={[
                  {
                    min: 0,
                    max: 25000,
                    valueFormatter: (value: number) => `${Number(value).toLocaleString()}`,
                  },
                ]}
                series={[
                  {
                    data: data1,
                    area: true,
                    stack: 'total',
                    showMark: false,
                    color: '#0059b3',
                  },
                  {
                    data: data2,
                    area: true,
                    stack: 'total',
                    showMark: false,
                    color: '#027af2',
                  },
                  {
                    data: data3,
                    area: true,
                    stack: 'total',
                    showMark: false,
                    color: '#99ccff',
                  },
                ]}
                grid={{
                  horizontal: true,
                }}
                margin={{
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}
              />
            </StatsCard>
          </Grid>
          <Grid size={{ md: 6, xs: 12 }}>
            <StatsCard
              title='Page views and downloads'
              subtitle='Page views and downloads for the last 6 months'
              value='1.3M'
              change={-8}
              align='start'
            >
              <BarChart
                height={250}
                xAxis={[
                  {
                    data: xLabels2,
                    scaleType: 'band',
                    categoryGapRatio: 0.5,
                  },
                ]}
                yAxis={[
                  {
                    min: 0,
                    max: 15000,
                    valueFormatter: (value: number) => `${Number(value).toLocaleString()}`,
                  },
                ]}
                series={[
                  {
                    data: data4,
                    stack: 'total',
                    color: '#0059b3',
                  },
                  {
                    data: data5,
                    stack: 'total',
                    color: '#027af2',
                  },
                  {
                    data: data6,
                    stack: 'total',
                    color: '#4da6ff',
                  },
                ]}
                grid={{
                  horizontal: true,
                }}
                margin={{
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}
                borderRadius={8}
              />
            </StatsCard>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Typography
          variant='h4'
          sx={{
            mb: 2,
          }}
        >
          Details
        </Typography>
        <Grid
          container
          spacing={2}
        >
          <Grid size={{ md: 9, xs: 12 }}>
            <Table />
          </Grid>
          <Grid size={{ md: 3, xs: 12 }}>
            <Stack spacing={2}>
              <ProductTree />
              <Using />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  )
}

export default Home
