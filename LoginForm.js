{/*
Create a React component called LoginForm that contains input fields for username and password. When the user submits the form, display an alert with the entered username and password.

Expected Output:
Username: [input field]
Password: [input field]
[Submit Button]
*/}
import React, { useState } from 'react';

const LoginForm = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Username: ${username}\nPassword: ${password}`);
    }
    
    return (
    	 <form onSubmit={handleSubmit}>
            <div>
            	<label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
             <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
    )
}
export default LoginForm;
