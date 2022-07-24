import React from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Project from './components/Project'
import Footer from './components/Footer'

function App() {
    return (
        // the below is a language called JSX that can represent HTML in JavaScript
        // Think of functions that return JSX as functions that use document.createElement(JSX)
        <div>
            <Header></Header>
            <main>
                <About></About>
                <Project></Project>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default App;