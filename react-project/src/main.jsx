import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { CurrencyProviderFunc } from './context/CurrencyProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <CurrencyProviderFunc>
      <App />
    </CurrencyProviderFunc>
)
