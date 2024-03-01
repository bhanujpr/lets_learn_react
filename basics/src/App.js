import React from 'react';
import ReactDOM from 'react-Dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';



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






const AppLayout =()=>{
    return(
        <>
        <Header/>
        {/**Outlet */ }
        <Outlet/>
        <Footer/>
        </>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>,
            }
        ],
    },
   
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
