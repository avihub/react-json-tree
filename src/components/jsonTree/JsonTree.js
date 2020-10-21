import React from 'react';
import TreeNode from './TreeNode';

function JsonTree({jsonNode}) {
    return (
        <div className='jsonTree'>
            {jsonNode ? 
                <TreeNode jsonNode={jsonNode} /> 
                : <h3>Please enter URL to fetch the json</h3>
            }
            
            {/* {// <TreeNode jsonNode={{
            //     "firstName": "John",
            //     "lastName": "Smith",
            //     "isAlive": true,
            //     "age": 27,
            //     "address": {
            //         "streetAddress": "21 2nd Street",
            //         "city": "New York",
            //         "state": "NY",
            //         "postalCode": "10021-3100"
            //     },
            //     "phoneNumbers": [
            //         {
            //             "type": "home",
            //             "number": "212 555-1234"
            //         },
            //         {
            //             "type": "office",
            //             "number": "646 555-4567"
            //         }
            //     ],
            //     "children": [],
            //     "spouse": null
            // }}/>} */}
        </div>
    );
};

export default JsonTree;