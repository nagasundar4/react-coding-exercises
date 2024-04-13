import React from "react";

import "./styles.css";

export default function Toggle({ isOn, toggle }) {
    return (
        <div className="App">
            <h1>Hello World</h1>
            <button onClick={toggle}>{isOn ? "OFF" : "ON"}</button>
        </div>
    );
}
