// src/components/TodoApp.js
import React, { useState } from 'react';
import './TodoApp.css';

const TodoApp = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const addTask = () => {
        if (input.trim()) {
            setTasks([...tasks, input.trim()]);
            setInput('');
        }
    };

    const editTask = (index) => {
        const newTask = prompt('Edit your task:', tasks[index]);
        if (newTask) {
            const updatedTasks = tasks.slice();
            updatedTasks[index] = newTask;
            setTasks(updatedTasks);
        }
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="container">
            <h1>ToDo App</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter a new task"
                />
                <button onClick={addTask}>Add Task</button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="task">{task}</span>
                        <button onClick={() => editTask(index)} className="edit-btn">Edit</button>
                        <button onClick={() => deleteTask(index)} className="delete-btn">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
