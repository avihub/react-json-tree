import React from 'react';
import TreeNode from './TreeNode';

function ArrayNode({jsonNode}) {
    const lastProp = jsonNode.length - 1;

        const addComma = i => (
            i < lastProp ? ',' : null
        );

        return (
            <span className='array'>
                <span>
                    {'['}
                </span>
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
                <span>
                    {']'}
                </span>
            </span>
        )
};

export default ArrayNode;