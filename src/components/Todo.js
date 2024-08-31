import React, { useState } from 'react';
import './Todo.css';
import ResponsiveMenu from './ResponsiveMenu';
import {
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Box,
  AppBar,
  Toolbar,
  Paper,
} from '@mui/material';
import { CheckCircle, Cancel, ClearAll } from '@mui/icons-material';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const clearCompletedTasks = () => {
    const remainingTasks = tasks.filter(task => !task.completed);
    setTasks(remainingTasks);
  };

  return (
    <div>
      <ResponsiveMenu />
      
      <Container maxWidth="sm">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Todo List</Typography>
          </Toolbar>
        </AppBar>
        
        <Paper elevation={3} style={{ padding: '16px', marginTop: '16px' }}>
          <Box mb={2}>
            <TextField
              fullWidth
              variant="outlined"
              label="Enter a new task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
          </Box>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={addTask}
          >
            Add Task
          </Button>
        </Paper>

        <List>
          {tasks.map((task, index) => (
            <ListItem
              key={index}
              button
              onClick={() => toggleTaskCompletion(index)}
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            >
              <ListItemText primary={task.text} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleTaskCompletion(index);
                  }}
                  color={task.completed ? 'secondary' : 'default'}
                >
                  {task.completed ? <Cancel /> : <CheckCircle />}
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>

        <Button
          variant="contained"
          color="secondary"
          onClick={clearCompletedTasks}
          startIcon={<ClearAll />}
          style={{ marginTop: '16px' }}
          fullWidth
        >
          Clear Completed Tasks
        </Button>
      </Container>
    </div>
  );
};

export default Todo;
