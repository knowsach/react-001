const heading = React.createElement("h1",
    // props of the element
    {
        id: "heading",
        onClick: () => {
            console.log('clicked')
        },
        "random_prop": 'random value' // random_prop is not recognised by React.
    }, "Heading");

const heading2 = React.createElement("h1",
    // props of the element
    {
        id: "heading2",
        onClick: () => {
            console.log('clicked')
        },
    }, "Heading 2");

console.log(heading);

const container = React.createElement('div', {}, [
    heading, heading2
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
//passing react element in reactDom root.
root.render(container);