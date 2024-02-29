import React from 'react';
import ReactDOM from 'react-Dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';


// const heading =React.createElement(
//     'h1',
//     {
//         id:"heading",
//         key:"h1"
//     },
//     "Heading one"
// )
const heading=<h1 key="h1">Heading One</h1>


// const heading2 = React.createElement(
//     'h2',
//     {
//         id:"heading2",
//         key:"h2"
//     },
//     "heading two"
// )
const heading2=<h2 key="h2">Heading two</h2>


// const container =  React.createElement(
//     'div',
//     {
//         id:"container"
//     },
//     [heading,heading2]
// )
const container= <div>{heading} {heading2}</div>
//this is react element(object variable)


//Components
//functional components(it is just a function)
//Name in capital letter alwaays not mandatory but good to use
//It is a normal function returning JSX
// const NewComponent=()=>{
//     <h1>Hello</h1>
// }
//for multiple line use simply (); write your code inside it

/**
 * 
 * Navbar
 *      -Logo
 *      -List
 * Body
 *      -search
 *      -card
 * Footer
 * 
 */






const AllComponents =()=>{
    return(
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AllComponents/>);
