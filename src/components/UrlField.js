import React from 'react';

function UrlField({value, onInput}) {
    return (
        <div className='url-field'>
            <h1>
                Json viewer
            </h1>
            <input type="url" name="url" id="url" placeholder="https://example.com" 
                value={value}
                onInput={onInput}
            />
            <div id="json-view"></div>
        </div>
    );
};

export default UrlField;