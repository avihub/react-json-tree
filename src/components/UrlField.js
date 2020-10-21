import React from 'react';

function UrlField() {

    // const init = () => {
    //     let waitingReq = null;
    //     document.getElementById("url").addEventListener('input', prapareReq);
    //     const jsonContainer = document.getElementById("json-view");

    //     function prapareReq(e) {
    //         if (waitingReq) {
    //             window.clearTimeout(waitingReq);
    //         }
    //         waitingReq = setTimeout(makeRequest.bind(this, e), 1000);
    //     }

    //     function makeRequest(e) {
    //         fetch(e.target.value)
    //             .then(response => {
    //                 if (!response.ok) {
    //                     throw new Error('response status code is not ok');
    //                 }
    //                 return response.json()
    //             }
    //             )
    //             .then(json => {
    //                 jsonContainer.appendChild(createJsonTree(json));
    //             }
    //             )
    //             .catch(error => {
    //                 alert(`error: ${error}`);
    //             });
    //     }
    // }
    // init();

    return (
        <div className='url-field'>
            <h1>
                Json viewer
            </h1>
            <input type="url" name="url" id="url" placeholder="https://example.com"></input>
            <div id="json-view"></div>
        </div>
    );
};

export default UrlField;