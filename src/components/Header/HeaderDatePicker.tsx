import { useState } from 'react'
import dayjs, { type Dayjs } from 'dayjs'
import { Button, ClickAwayListener, Grow, Paper, Popper } from '@mui/material'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'

const HeaderDatePicker = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [value, setValue] = useState<Dayjs | null>(dayjs(new Date()))
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        variant='outlined'
        startIcon={<CalendarTodayIcon sx={{ width: 18, height: 18 }} />}
        onClick={(event) => {
          setAnchorEl(event.currentTarget)
          setOpen((prev) => !prev)
        }}
        sx={{
          height: 36,
          px: 1.5,
          borderRadius: 1.5,
          color: 'text.primary',
          borderColor: 'divider',
          fontWeight: 600,
          textTransform: 'none',
        }}
      >
        {value?.format('MMM D, YYYY')}
      </Button>

      <Popper
        open={open}
        anchorEl={anchorEl}
        placement='bottom-end'
        transition
        sx={{
          zIndex: 1300,
        }}
      >
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            timeout={200}
            style={{
              transformOrigin: 'top right',
            }}
          >
            <Paper
              sx={{
                mt: 1,
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 1,
                boxShadow: 'none',
                overflow: 'hidden',
              }}
            >
              <ClickAwayListener onClickAway={() => setOpen(false)}>
                <DateCalendar
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue)
                    setOpen(false)
                  }}
                  sx={{
                    width: 320,

                    '& .MuiPickersCalendarHeader-label': {
                      fontWeight: 700,
                    },

                    '& .MuiPickersDay-root': {
                      borderRadius: 1.5,
                      color: 'text.primary',
                    },

                    '& .MuiPickersDay-root.Mui-selected': {
                      bgcolor: 'primary.main',
                      color: 'primary.contrastText',

                      '&:hover': {
                        bgcolor: 'primary.dark',
                      },
                    },

                    '& .MuiPickersDay-today': {
                      borderColor: 'primary.main',
                    },
                  }}
                />
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}

export default HeaderDatePicker
