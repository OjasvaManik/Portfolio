import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Certifications from "./components/Certifications.jsx";
import Experience from "./components/Experience.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/skills',
                element: <Skills />
            },
            {
                path: '/certifications',
                element: <Certifications />
            },
            {
                path: '/experience',
                element: <Experience />
            },
            {
                path: '/projects',
                element: <Projects />,
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
