import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from './App'
import './index.css'
import { AppThemeProvider } from './shared/contexts/ThemeContext'
import { DrawerProvider } from './shared/contexts/DrawerContext'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <DrawerProvider>
    <AppThemeProvider>

      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>

    </AppThemeProvider>
  </DrawerProvider>
)
