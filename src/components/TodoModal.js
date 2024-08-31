import React, { useState } from 'react';
import { Modal, Box, Button } from '@mui/material';
import TodoList from './TodoList'; // Import the TodoList component

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

const TodoModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open To-Do List
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="todo-modal-title"
        aria-describedby="todo-modal-description"
      >
        <Box sx={style}>
          <h2 id="todo-modal-title">To-Do List</h2>
          <TodoList />
        </Box>
      </Modal>
    </div>
  );
};

export default TodoModal;
