import React from 'react';
import TreeNode from './TreeNode';

function JsonTree({jsonNode}) {
    return (
        <div className='jsonTree'>
            {jsonNode ? 
                <TreeNode jsonNode={jsonNode} /> 
                : <h3>Please enter URL to fetch the json</h3>
            }
        </div>
    );
};

export default JsonTree;