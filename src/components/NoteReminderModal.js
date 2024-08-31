import React, { useState } from 'react';
import { Modal, Box, Button, TextField, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const NoteReminderModal = () => {
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState('');
  const [reminderDate, setReminderDate] = useState(dayjs());

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = () => {
    console.log('Note:', note);
    console.log('Reminder Date & Time:', reminderDate.toString());
    // Add your submission logic here
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Set Note Reminder
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="note-reminder-modal-title"
        aria-describedby="note-reminder-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2" id="note-reminder-modal-title">
            Set Reminder
          </Typography>
          <TextField
            fullWidth
            label="Note"
            margin="normal"
            variant="outlined"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="Reminder Date & Time"
              value={reminderDate}
              onChange={(newValue) => setReminderDate(newValue)}
              renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
            />
          </LocalizationProvider>
          <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
            Set Reminder
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default NoteReminderModal;
