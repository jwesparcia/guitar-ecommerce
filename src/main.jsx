import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GuitarEcommerce from './GuitarEcommerce'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GuitarEcommerce />
  </BrowserRouter>,
)
