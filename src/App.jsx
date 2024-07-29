import React from 'react'
import Home from './pages/home/home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/about/about'
import Laws from './pages/laws/laws'
import Contacts from './pages/contacts/contacts'
import Passengers from './pages/passengers/passengers'
import GetById from './pages/getById/getById'
import Login from './pages/login/login'

const App = () => {
  let router = createBrowserRouter([
    {
      index: true,
      element: <Home/>
    },
    {
      path: '/about',
      element: <About/>
    },
    {
      path: '/laws',
      element: <Laws/>
    },
    {
      path: '/contacts',
      element: <Contacts/>
    },
    {
      path: '/passengers',
      element: <Passengers/>
    },
    {
      path: '/:id',
      element: <GetById/>
    },
    {
      path: '/laws',
      element: <Laws/>
    },
    {
      path: '/login',
      element: <Login/>
    }
  ])
  return <RouterProvider router={router}></RouterProvider>
}

export default App