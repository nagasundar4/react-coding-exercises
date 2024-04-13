import React, { useState } from 'react';

const DraggableList = ({ items }) => {
  const [listItems, setListItems] = useState(items);

  const handleDragStart = (index) => (e) => {
    e.dataTransfer.setData('index', index);
  };

  const handleDragOver = (index) => (e) => {
    e.preventDefault();
    const draggedIndex = parseInt(e.dataTransfer.getData('index'));
    const newListItems = [...listItems];
    const draggedItem = newListItems[draggedIndex];
    newListItems.splice(draggedIndex, 1);
    newListItems.splice(index, 0, draggedItem);
    setListItems(newListItems);
  };

  return (
    <ul>
      {listItems.map((item, index) => (
        <li
          key={index}
          draggable
          onDragStart={handleDragStart(index)}
          onDragOver={handleDragOver(index)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default DraggableList;
