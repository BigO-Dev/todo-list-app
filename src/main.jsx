import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navmenu from './components/Navbar.jsx'
import Grades from './pages/Grades.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navmenu />}>
      <Route path='homework' element={<App />} />
      <Route path='grades' element={<Grades />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
)
