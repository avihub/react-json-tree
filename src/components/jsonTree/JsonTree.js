import React from 'react';
import TreeNode from './TreeNode';

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
        <div style={{ textAlign: 'center' }}>
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