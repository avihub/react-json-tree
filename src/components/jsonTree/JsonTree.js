import React from 'react';
import TreeNode from './TreeNode';

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

function JsonTree() {
    return (
        <div style={{ textAlign: 'left' }}>
            <h1>
                JsonTree
            </h1>

            <TreeNode jsonNode={{
                "firstName": "John",
                "lastName": "Smith",
                "isAlive": true,
                "age": 27,
                "address": {
                    "streetAddress": "21 2nd Street",
                    "city": "New York",
                    "state": "NY",
                    "postalCode": "10021-3100"
                },
                "phoneNumbers": [
                    {
                        "type": "home",
                        "number": "212 555-1234"
                    },
                    {
                        "type": "office",
                        "number": "646 555-4567"
                    }
                ],
                "children": [],
                "spouse": null
            }}/>
        </div>
    );
};

export default JsonTree;