import React from 'react';
import ReactDOM from 'react-Dom/client'


const heading =React.createElement(
    'h1',
    {
        id:"heading"
    },
    "Heading one"
)

const heading2 = React.createElement(
    'h1',
    {
        id:"heading2"
    },
    "heading two"
)

const container =  React.createElement(
    'div',
    {
        id:"container"
    },
    [heading,heading2]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);
