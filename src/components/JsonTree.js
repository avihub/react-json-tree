import React from 'react';

const style = document.createElement("style");
style.innerHTML = `
.prop {
  margin-left: 20px;
}
.toggle {
  color: blue;
  padding: 0px 3px;
  margin: 0px 2px;
  font-weight: bolder;
}
`;
document.head.appendChild(style);

const createJsonTree = json => {
    const createToogle = (toggledEl) => {
        const toggle = document.createElement("span");
        toggle.classList.add("toggle");
        toggle.innerText = "-";
        toggle.isOpen = true;
        toggle.addEventListener("click", () => {
            if (toggle.isOpen) {
                toggledEl.style.display = "none";
                toggle.innerText = "+";
            } else {
                toggledEl.style.display = "";
                toggle.innerText = "-";
            }
            toggle.isOpen = !toggle.isOpen;
        });
        return toggle;
    };

    const createLeafNode = (jsonNode) => {
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

    const createObjectNode = (jsonNode) => {
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
                                {createNode(jsonNode[n])}
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

    const createArrayNode = (jsonNode) => {
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
                                {createNode(n)}
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

    const createNode = (jsonNode) => {
        // console.log('createNode input', jsonNode);
        // console.log('typeof createNode input', typeof jsonNode);
        let node;
        if (typeof jsonNode === "object") {
            if (Array.isArray(jsonNode)) {
                node = createArrayNode(jsonNode);
            } else if (jsonNode === null) {
                node = createLeafNode(jsonNode);
            } else {
                node = createObjectNode(jsonNode);
            }
        } else {
            node = createLeafNode(jsonNode);
        }

        return node;
    };

    return (
        <div className='json-tree'>
            {createNode(json)}
        </div>
    );
};

function JsonTree() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>
                JsonTree
            </h1>

            {createJsonTree({ a: 34, arr2: [1, 2, 4], c: "asdk", z: 34.22, arr: [3,33] })}


        </div>
    );
};

export default JsonTree;