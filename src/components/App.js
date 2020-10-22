import React, { useState } from 'react';
import './App.css';
import UrlField from './UrlField';
import JsonTree from './jsonTree/JsonTree';

let waitingReq = null;

function App() {
    const [value, setValue] = useState('');
    const [json, setJson] = useState('');


    function handleOnInput(e) {
        setValue(e.target.value);

        prapareReq(e);
    }

    function prapareReq(e) {
        if (waitingReq) {
            window.clearTimeout(waitingReq);
        }
        waitingReq = setTimeout(makeRequest.bind(this, e), 1000);
    }
    
    function makeRequest(e) {
        fetch(e.target.value)
            .then(response => {
                if (!response.ok) {
                    throw new Error('response status code is not ok');
                }
                return response.json()
            }
            )
            .then(json => {
                setJson(json);
            }
            )
            .catch(error => {
                alert(`error: ${error}`);
            });
    }

    return (
        <div className="App">
            <UrlField value={value} onInput={handleOnInput} />
            <JsonTree jsonNode={json} />
        </div>
    );
}

export default App;
