import React from 'react';
import TreeNode from './TreeNode';
import Collapsable from './Collapsable';

function SubTree({ jsonNode}) {
    const childKeys = Object.keys(jsonNode);
    const lastProp = childKeys.length - 1;

    const addComma = i => (
        i < lastProp ? ',' : null
    );

    const surroundKeys = (objectKey) => {
        if (typeof jsonNode === 'object') {
            return `"${objectKey}": `;
        }
        return '';
    };

    const getOpenBracket = () => {
        if(Array.isArray(jsonNode)) {
            return '[';
        } else if (typeof jsonNode === 'object') {
            return '{';
        }
    };

    const getCloseBracket = () => {
        if(Array.isArray(jsonNode)) {
            return ']';
        } else if (typeof jsonNode === 'object') {
            return '}';
        }
    };

    return (
        <span className='object'>
            <span>
                {getOpenBracket()}
            </span>
            <Collapsable>
                <span>
                    {childKeys.map((n, i) => (
                        <div key={i} className='prop'>
                            <span>
                                {surroundKeys(n)}
                                <TreeNode jsonNode={jsonNode[n]} />
                                {addComma(i)}
                            </span>
                        </div>
                    ))}
                </span>
            </Collapsable>
            <span>
                {getCloseBracket()}
            </span>
        </span>
    )
};

export default SubTree;