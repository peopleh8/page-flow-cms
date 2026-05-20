import type { FC } from 'react'
import { Breadcrumbs, Link, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault()
  console.info('You clicked a breadcrumb.')
}

const CustomBreadcrumbs: FC = () => {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize='small' />}
      aria-label='breadcrumb'
      sx={{
        '& .MuiBreadcrumbs-separator': {
          mx: 0,
        },
      }}
    >
      <Link
        underline='hover'
        key='1'
        color='inherit'
        href='/'
        onClick={handleClick}
      >
        Dashboard
      </Link>
      ,
      <Typography
        key='3'
        sx={{ color: 'text.primary' }}
      >
        Home
      </Typography>
      ,
    </Breadcrumbs>
  )
}

export default CustomBreadcrumbs
