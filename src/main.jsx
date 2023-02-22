import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import  BotonCamara from './Componentes/ComponentCamera'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <BotonCamara/>
  </React.StrictMode>,
)
