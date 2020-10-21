import React from 'react';
import logo from './logo.svg';
import './App.css';
import UrlField from './UrlField';
import JsonTree from './jsonTree/JsonTree';

function App() {
    return (
        <div className="App">
            <UrlField />
            <JsonTree />
        </div>
    );
}

export default App;
