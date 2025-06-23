import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Typography } from '@mui/material';

const Calendar = () => (
  <>
    <Typography variant="h5" gutterBottom>
      Calendar Page
    </Typography>
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      height="75vh"
    />
  </>
);

export default Calendar;
