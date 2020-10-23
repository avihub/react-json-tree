import React, { useState } from 'react';
import './App.css';
import UrlField from './UrlField';
import JsonTree from './jsonTree/JsonTree';

function App() {
    const [json, setJson] = useState('');


    function updateJsonTree(json) {
        setJson(json);
    }

    return (
        <div className="App">
            <UrlField updateJsonTree={updateJsonTree} />
            <JsonTree jsonNode={json} />
        </div>
    );
}

export default App;
