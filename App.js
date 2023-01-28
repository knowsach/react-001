import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
    "h1", {
        // props of the element
        id: "heading",
        onClick: () => {
            console.log('clicked')
        },
        "random_prop": 'random value'
    }, "Heading"
);

const heading2 = React.createElement(
    "h1", {
        id: "heading2",
    },
    "Heading 2"
);

console.log(heading);

const container = React.createElement('div', {}, [
    heading, heading2
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
//passing react element in reactDom root.
root.render(container);