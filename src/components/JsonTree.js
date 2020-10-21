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
                        <div className='prop'>
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

    const createArrayNode = (parentNode, jsonNode) => {
        const arrayNode = document.createElement("span");
        arrayNode.classList.add("array");
        const openBracket = document.createElement("span");
        openBracket.innerText = "[";
        const closeBracket = document.createElement("span");
        closeBracket.innerText = "]";
        const arrayContentDiv = document.createElement("span");

        const lastProp = jsonNode.length - 1;
        jsonNode.forEach((n, i) => {
            const prop = document.createElement("div");
            prop.classList.add("prop");
            createNode(prop, n);
            if (i < lastProp) {
                prop.appendChild(document.createTextNode(","));
            }
            arrayContentDiv.appendChild(prop);
        });

        arrayNode.appendChild(openBracket);
        arrayNode.appendChild(createToogle(arrayContentDiv));
        arrayNode.appendChild(arrayContentDiv);
        arrayNode.appendChild(closeBracket);
        parentNode.appendChild(arrayNode);
    };

    const createNode = (jsonNode) => {
        console.log('createNode input', jsonNode);
        console.log('typeof createNode input', typeof jsonNode);
        let node;
        if (typeof jsonNode === "object") {
            if (Array.isArray(jsonNode)) {
                // createArrayNode(parentNode, jsonNode);
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

    // const jsonTree = {};
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

            {createJsonTree({ a: 34, c: "asdk", z: 34.22 })}


        </div>
    );
};

export default JsonTree;