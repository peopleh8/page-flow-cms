import type { FC, ReactNode } from 'react'
import { Box, Chip, Typography } from '@mui/material'

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
      {(title || value !== undefined || subtitle || change !== undefined) && (
        <Box>
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
    </Box>
  )
}

export default StatsCard
