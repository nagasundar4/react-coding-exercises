/*Create a React component called Counter that displays a button and a count. Clicking the button should increment the count.

Expected Output:

mathematica
Copy code
Count: 0
[Increment Button]*/
import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = new useState(0);
    
    function increment() {
        setCount(count+1);
    }
    
    return (
    	<div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    )
    
}
