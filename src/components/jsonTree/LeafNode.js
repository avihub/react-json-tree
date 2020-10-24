import React from 'react';

function LeafNode({jsonNode}) {
    let text = '';
    if (typeof jsonNode === "string") {
        text = `"${jsonNode}"`;
    } else if (jsonNode === null) {
        text = "null";
    } else { // number OR boolean
        text += jsonNode;
    }

    return (
        <span>
            {text}
        </span>
    )
};

export default LeafNode;