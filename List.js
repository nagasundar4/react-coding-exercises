{/*Create a React component called List that displays an unordered list (<ul>) containing three list items (<li>), each with a different color text.

Expected Output:
- Red
- Green
- Blue
*/}
import React from 'react'
import './styles.css'

export default function List() {
    
    return (
    	<>
            <div>
                <ul>
                    {/*<li style={{ color: 'red' }}>Red</li>
                    <li style={{ color: 'Green' }}>Green</li>
                    <li style={{ color: 'Blue' }}>Blue</li>*/}
                    <li className="red">Red</li>
                    <li className="green">Green</li>
                    <li className="blue">Blue</li>
                </ul>
            </div>
        </>
    )
}
