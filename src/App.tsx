import React from 'react';
import {useState} from "react";
import './App.css';

const App = () => {
    const [count, setCounter] = useState(0);
    return (
    <div className="App">
        <h1 className='text-3xl text-amber-900 bg-green-900'>Hello World!</h1>
        <div>{count}</div>
        <button onClick={() => {
            setCounter(count + 1)
        }}>Press me</button>
    </div>
  );
}

export default App;
