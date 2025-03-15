import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from './pages/Home'
import Authentication from './pages/Authentication'
import { Provider } from 'react-redux'
import store from './redux/store/store'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/auth",
    element: <Authentication />
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
)
