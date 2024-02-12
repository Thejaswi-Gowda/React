import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/Header';
import Body from './Components/Body';
import About from './Components/About';
import Contact from './Components/Contact';
import ErrorPage from './Components/ErrorPage';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import MenuPage from './Components/MenuPage';

const AppLayout = () => (
    <>
        <div className="header-container">
            <Header/>
        </div>
        <div className='body-container'>
            <Outlet />
        </div>
    </>
)

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: '/restaurants/:resId',
                element: <MenuPage />
            }
        ],
        errorElement: <ErrorPage />
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);