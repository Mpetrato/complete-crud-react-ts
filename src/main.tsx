import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from './App'
import { AppThemeProvider } from './shared/contexts/ThemeContext'
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppThemeProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </AppThemeProvider>
)
