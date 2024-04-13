import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
{/*import Toggle from './toggle'
import Greetings from './Greetings'
import Counter from './Counter'
import List from './List'
import LoginForm from './LoginForm'
import TodoList from './TodoList';
import Timer from './Timer'
import Accordian from './Accordion'
import DraggableList from './DraggableList';
import ChatApp from './ChatApp'*/}
import ImageGallery from './ImageGallery'

import "./styles.css";

function App() {
    {/*const [isOn, setIsOn] = useState(false);
    function toggle() {
        setIsOn(!isOn);
    }*/}
    {/*const items = [
        { title: 'Item 1', content: 'Content 1' },
        { title: 'Item 2', content: 'Content 2' },
        { title: 'Item 3', content: 'Content 3' },
  	];
    const items = ['Item 1', 'Item 2', 'Item 3'];*/}
    const images = [
        { url: 'https://images.unsplash.com/photo-1712924653565-1cd256dcd2d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D', alt: 'photo-1712924653565-1cd256dcd2d1.avif' },
        { url: 'https://images.unsplash.com/photo-1712939707022-c9aba658184f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8', alt: 'photo-1712939707022-c9aba658184f.avif' },
        { url: 'https://plus.unsplash.com/premium_photo-1674676471943-83c8b5b7e43c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8', alt: 'premium_photo-1674676471943-83c8b5b7e43c.avif' },
      ];
    return (
        <div className="App">
            {/* <Toggle isOn={isOn} toggle={toggle} />*/}
            {/* <Greetings name="Nagarajan"/>*/}
            {/* <Counter/>*/}
            {/*<List/>*/}
            {/*<LoginForm/>*/}
            {/*<Timer/>*/}
               {/*<h1>Todo List</h1>
                <TodoList />*/} 
            {/*<Accordian items={items}/>*/}
            {/*<h1>Draggable List</h1>
      		<DraggableList items={items} />
            <ChatApp/>*/}
            <ImageGallery images={images} />
        </div>
    );
}

 {/*const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);*/}
ReactDOM.render(<App />, document.getElementById('root'));
