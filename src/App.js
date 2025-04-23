import React from 'react';
import ReactDOM from 'react-dom/client';
import "../index.css";
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import About from './components/About/About';
import ContactUs from './components/Contact/ContactUs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import RestroMenu from './components/RestroMenu/RestroMenu';

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
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
            element: <ContactUs />,
        },
        {
            path: "/restaurant/:resId",
            element: <RestroMenu />
        }
    ]
    },
])
const AppData = ReactDOM.createRoot(document.getElementById("root"));
AppData.render(<RouterProvider router={appRouter} />)