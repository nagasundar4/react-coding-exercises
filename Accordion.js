{/*
Create a React component called Accordion that displays a list of items. Clicking on an item should expand it to show its content, while collapsing any previously expanded item.

Expected Output:
- Item 1
  - Content 1
- Item 2
  - Content 2
- Item 3
  - Content 3
*/}
import React, { useState } from 'react';

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(null);
    
    const handleItemClick = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(null);
        } else {
            setExpandedIndex(index);
        }
    }
    
    return (
    	<div>
            {items.map((item, index) => (
                <div key={index}>
                    <div
                    onClick={() => handleItemClick(index)}
                    style={{ cursor: 'grabbing', marginBottom: '10px' }}
                   >
                        <strong>{item.title}</strong>
                </div>
                {expandedIndex === index && (
                <div style={{ marginLeft: '50px' }}>{item.content}</div>
                  )}
                </div>
          	))}
        </div>
    )
}
export default Accordion;
