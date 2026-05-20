import type { FC } from 'react'
import { Box, ButtonBase, Divider, Typography } from '@mui/material'
import HandymanIcon from '@mui/icons-material/Handyman'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'

const SidebarProjectSwitcher: FC = () => {
  return (
    <Box>
      <Box
        sx={{
          padding: 1 * 1.5,
        }}
      >
        <ButtonBase
          sx={{
            width: '100%',
            height: '56px',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 1,
            pl: 1,
            pr: 1 * 1.5,
            position: 'relative',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              textAlign: 'left',
              gap: 1 * 1.6,
              pl: 1,
              pr: 4,
            }}
          >
            <Box sx={{ width: 30, height: 30, borderRadius: '50%', display: 'grid', placeItems: 'center', border: '1px solid', borderColor: 'divider' }}>
              <HandymanIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
            </Box>
            <Box>
              <Typography variant='body1'>Project Name</Typography>
              <Typography
                variant='body2'
                sx={{ color: 'text.secondary' }}
              >
                Project Description
              </Typography>
            </Box>
            <UnfoldMoreIcon sx={{ position: 'absolute', right: 10, fontSize: 20 }} />
          </Box>
        </ButtonBase>
      </Box>
      <Divider />
    </Box>
  )
}

export default SidebarProjectSwitcher
