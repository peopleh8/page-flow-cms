import type { FC } from 'react'
import { Box, InputAdornment, TextField } from '@mui/material'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'

const HeaderSearch: FC = () => {
  return (
    <Box component='form'>
      <TextField
        size='small'
        placeholder='Search...'
        sx={{
          height: '36px',
          width: '210px',
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position='start'>
                <SearchRoundedIcon sx={{ fontSize: 20 }} />
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  )
}

export default HeaderSearch
