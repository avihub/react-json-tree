import React from 'react';
import TreeNode from './TreeNode';
import Collapsable from './Collapsable';

function ArrayNode({ jsonNode }) {
    const lastProp = jsonNode.length - 1;

    const addComma = i => (
        i < lastProp ? ',' : null
    );

    return (
        <span className='array'>
            <span>
                {'['}
            </span>
            <Collapsable>
                <span>
                    {jsonNode.map((n, i) => (
                        <div key={i} className='prop'>
                            <span>
                                <TreeNode jsonNode={n} />
                                {addComma(i)}
                            </span>
                        </div>
                    ))}
                </span>
            </Collapsable>
            <span>
                {']'}
            </span>
        </span>
    )
};

export default ArrayNode;