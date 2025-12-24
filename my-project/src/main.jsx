import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import router from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router'
import AuthProviser from './Provider/AuthProviser.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviser>
      <RouterProvider router={router}></RouterProvider>
    </AuthProviser>
  </StrictMode>,
)
