import React from 'react';
import TreeNode from './TreeNode';
import Collapsable from './Collapsable';

function ObjectNode({ jsonNode }) {
    const childKeys = Object.keys(jsonNode);
    const lastProp = childKeys.length - 1;

    const addComma = i => (
        i < lastProp ? ',' : null
    );

    return (
        <span className='object'>
            <span>
                {'{'}
            </span>
            <Collapsable>
                <span>
                    {childKeys.map((n, i) => (
                        <div key={i} className='prop'>
                            <span>
                                {`"${n}": `}
                                <TreeNode jsonNode={jsonNode[n]} />
                                {addComma(i)}
                            </span>
                        </div>
                    ))}
                </span>
            </Collapsable>
            <span>
                {'}'}
            </span>
        </span>
    )
};

export default ObjectNode;