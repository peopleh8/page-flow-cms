import { useState, type FC } from 'react'
import { Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Card from '../../../../components/Card/Card'

const ProductTree: FC = () => {
  const [open, setOpen] = useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <Card title='Product tree'>
      <List
        component='nav'
        sx={{
          width: '100%',
          p: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          '& .MuiListItemButton-gutters': {
            borderRadius: 1,
            px: 1,
            py: 0.5,
            '&:not(:has(.MuiListItemIcon-root))': {
              position: 'relative',
              '&::before': {
                content: '""',
                display: 'block',
                width: 6,
                height: 6,
                borderRadius: '50%',
                bgcolor: '#027af2',
                mr: 1,
              },
            },
          },
          '& .MuiListItemText-root': {
            m: 0,
          },
          '& .MuiList-root': {
            ml: 2,
            pt: 1,
          },
          '& .MuiListItemIcon-root': {
            minWidth: 0,
          },
        }}
      >
        <ListItemButton>
          <ListItemText primary='Website' />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary='Store' />
        </ListItemButton>
        <Box>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon sx={{ mr: 1, transition: 'transform 0.3s ease', transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}>
              <ArrowForwardIosIcon sx={{ fontSize: 'small' }} />
            </ListItemIcon>
            <ListItemText primary='Contact' />
          </ListItemButton>
          <Collapse
            in={open}
            timeout={400}
          >
            <List
              component='div'
              disablePadding
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                  transformOrigin: 'bottom center',
                  opacity: open ? 1 : 0,
                  transform: open ? 'scale(1)' : 'scale(0.95)',
                  transition: 'opacity 0.3s ease, transform 0.3s ease',
                  transitionDelay: open ? '0.1s' : '0s',
                }}
              >
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary='Starred' />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary='Starred' />
                </ListItemButton>
              </Box>
            </List>
          </Collapse>
        </Box>
        <ListItemButton>
          <ListItemText primary='Help' />
        </ListItemButton>
      </List>
    </Card>
  )
}

export default ProductTree
