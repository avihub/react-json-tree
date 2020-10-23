import React, { useState } from 'react';

let waitingReq = null;

function UrlField({ updateJsonTree }) {
    const [url, setUrl] = useState('');

import React from 'react';
    function onInput(e) {
        const url = e.target.value;
        setUrl(url);
        prapareReq(url);
    }

    function prapareReq(url) {
        if (waitingReq) {
            window.clearTimeout(waitingReq);
        }
        waitingReq = setTimeout(makeRequest.bind(this, url), 1000);
    }

    function makeRequest(url) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('response status code is not ok');
                }
                return response.json()
            }
            )
            .then(json => {
                updateJsonTree(json);
            }
            )
            .catch(error => {
                console.log(`error: ${error}`);
            });
    }

    return (
        <div className='url-field'>
            <h1>
                Json viewer
            </h1>
            <input type="url" name="url" id="url" placeholder="https://example.com"
                url={url}
                onInput={onInput}
            />
            <div id="json-view"></div>
        </div>
    );
};

export default UrlField;