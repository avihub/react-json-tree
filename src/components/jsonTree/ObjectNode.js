import React from 'react';
import TreeNode from './TreeNode';

function ObjectNode({jsonNode}) {
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
                <span>
                    {childKeys.map((n, i) => (
                        <div key={i} className='prop'>
                            <span>
                                {`"${n}": `}
                                <TreeNode jsonNode={jsonNode[n]}/>
                                {addComma(i)}
                            </span>
                        </div>
                    ))}
                </span>
                <span>
                    {'}'}
                </span>
            </span>
        )
};

export default ObjectNode;