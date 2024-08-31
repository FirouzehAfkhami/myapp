import React, { useState } from 'react';
import { Button, TextField, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <TextField
        label="New Task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={addTodo}>
        Add Task
      </Button>
      <List>
        {todos.map((todo, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" onClick={() => deleteTodo(index)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={todo} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TodoList;
