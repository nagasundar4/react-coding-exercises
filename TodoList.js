{/*
Create a React component called TodoList that allows users to add new todo items. Display all added todo items in a list.

Expected Output:
[Input field to add todo]
[Add button]
- Todo 1
- Todo 2
- Todo 3
*/}
import React, { useState } from 'react';

function TodoList() {
    
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    
    const handleInputChange = (event) => {
        setNewTodo(event.target.value);
    }
    
    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, newTodo]);
            setNewTodo('');
        }
    }
    
    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Add new todo"
                    value={newTodo}
                    onChange={handleInputChange}
                />
            </div>
            <button onClick={handleAddTodo}>Add</button>
            <ul align="left">
                {todos.map((todo, index) => (
                     <li key={index}>{todo}</li>
                ))}
            </ul>
        </>
    )
}

export default TodoList;
