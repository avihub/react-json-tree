import React from 'react';
import LeafNode from './LeafNode';
import SubTree from './SubTree';

function TreeNode({jsonNode}) {
    let NodeType;
    if (typeof jsonNode === "object" && jsonNode !== null) {
        NodeType = SubTree;
    } else {
        NodeType = LeafNode;
    }

    return <NodeType jsonNode={jsonNode} />;
};

export default TreeNode;