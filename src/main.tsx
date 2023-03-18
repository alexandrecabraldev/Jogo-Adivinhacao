import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalTheme } from './global/GlobalTheme'
import { ThemeProvider } from 'styled-components'
import {GlobalStyle} from "./global/GlobalStyle"


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={GlobalTheme}>
      <GlobalStyle/>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
