import React from 'react';
import LeafNode from './LeafNode';
import ArrayNode from './ArrayNode';
import ObjectNode from './ObjectNode';

function TreeNode({jsonNode}) {
    let NodeType;
    if (typeof jsonNode === "object") {
        if (Array.isArray(jsonNode)) {
            NodeType = ArrayNode;
        } else if (jsonNode === null) {
            NodeType = LeafNode;
        } else {
            NodeType = ObjectNode;
        }
    } else {
        NodeType = LeafNode;
    }

    return <NodeType jsonNode={jsonNode} />;
};

export default TreeNode;