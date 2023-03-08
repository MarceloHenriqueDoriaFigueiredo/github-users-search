import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Home } from './components/Home'
import { Search } from './components/Search'
import './global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Home />
  </React.StrictMode>,
)
