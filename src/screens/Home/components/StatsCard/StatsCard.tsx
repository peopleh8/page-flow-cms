import type { FC, ReactNode } from 'react'
import { Box, Chip, Typography } from '@mui/material'
import Card from '../../../../components/Card/Card'

type StatsCardProps = {
  title?: string
  value?: string | number
  subtitle?: string
  change?: number
  default?: boolean
  withoutPadding?: boolean
  align?: 'start' | 'center' | 'end' | 'space-between'
  children: ReactNode
}

const StatsCard: FC<StatsCardProps> = ({ children, title, value, subtitle, change, default: isDefault = false, withoutPadding = false, align = 'space-between' }) => {
  const isPositive = change !== undefined && change >= 0

  const contentAlign = align !== 'center' && align !== 'space-between' ? `flex-${align}` : align

  return (
    <Card
      withoutPadding={withoutPadding}
      title={title}
    >
      {(value !== undefined || subtitle || change !== undefined) && (
        <Box>
          {(value !== undefined || change !== undefined) && (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: contentAlign, gap: 1 }}>
              {value !== undefined && (
                <Typography
                  variant='h2'
                  sx={{
                    mb: 1 / 2,
                  }}
                >
                  {value}
                </Typography>
              )}
              {change !== undefined && (
                <Chip
                  label={`${isPositive ? '+' : ''}${change}%`}
                  size='small'
                  color={isDefault ? 'secondary' : isPositive ? 'success' : 'error'}
                  variant='outlined'
                />
              )}
            </Box>
          )}
          {subtitle && (
            <Typography
              variant='body2'
              sx={{
                color: 'text.secondary',
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
      )}
      <Box sx={{ width: '100%' }}>{children}</Box>
    </Card>
  )
}

export default StatsCard
