import React from 'react';
import './App.css';
import About from './components/About';

function App() {
    return (
        // the below is a language called JSX that can represent HTML in JavaScript
        // Think of functions that return JSX as functions that use document.createElement(JSX)
        <div>
            <main>
                <About></About>
            </main>
        </div>
    )
}

export default App;