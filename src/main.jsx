import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route, RouterProvider , createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import Home from './Components/Home.jsx'

// const router = createBrowserRouter( [
//   {
//     path : '/',
//     element : <Layout />,
//     children : [
//       {
//         path : '',
//         element : <Home />
//       },
//       {
//         path : 'about',
//         element : <About />
//       }
//     ]

//   }

// ] )

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout /> } >
      < Route path='' element={<Home />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < RouterProvider router={router} />
  </React.StrictMode>,
)
