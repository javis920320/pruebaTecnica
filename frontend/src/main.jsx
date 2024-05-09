import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {PacienteProvider}from "../src/context/pacienteContext.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PacienteProvider>
    <App />
    </PacienteProvider>
    
  </React.StrictMode>,
)
