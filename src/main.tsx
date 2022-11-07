import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { $ } from './utils/functions'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot($<HTMLDivElement>('#root')!).render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
)
